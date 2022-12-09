import { forwardRef, PropsWithChildren, useCallback, useContext, createContext, ReactNode } from 'react';
import { Label } from '../Label';
import { Container, GroupRoot } from './styles';

export type CheckboxGroupRootProps = PropsWithChildren<{
  label?: string
  error?: string
  name?: string,
  value?: string[],
  onValueChange?: (value: string[]) => void,
  children?: ReactNode | ReactNode[]
}>

export type CheckboxGroupContextProps = {
  onOptionChange: (optionValue: string, optionChecked: boolean) => void
  groupValue?: string[]
}

const CheckboxGroupContext = createContext<CheckboxGroupContextProps>({} as CheckboxGroupContextProps)
export const useCheckboxGroupContext = () => useContext(CheckboxGroupContext)

export const CheckboxGroupRoot = forwardRef<HTMLDivElement, CheckboxGroupRootProps>(
  ({
    label,
    error,
    name,
    value,
    onValueChange,
    children
  }, ref) => {
    const onOptionChange = useCallback(
      (optionValue: string, optionChecked: boolean) => {
        if (value) {
          if (optionChecked) {
            onValueChange?.([...value, optionValue])
          } else {
            onValueChange?.(value.filter(option => option !== optionValue))
          }
        } else if (optionChecked) {
          onValueChange?.([optionValue])
        }
      },
      [value, onValueChange]
    )

    return (
      <Container>
        <Label label={label} error={error} inputName={name} />
        <CheckboxGroupContext.Provider
          value={{
            onOptionChange,
            groupValue: value
          }}
        >
          <GroupRoot ref={ref}>
            {children}
          </GroupRoot>
        </CheckboxGroupContext.Provider>
      </Container>
    )
  }
)

CheckboxGroupRoot.displayName = 'CheckboxGroup.Root'
