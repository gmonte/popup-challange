import * as SelectPrimitive from '@radix-ui/react-select'
import { Check } from 'phosphor-react'
import { forwardRef } from 'react'
import { OptionContainer, OptionTextContainer } from './styles'

export type SelectOptionProps = SelectPrimitive.SelectItemProps

export const SelectOption = forwardRef<HTMLDivElement, SelectOptionProps>(
  ({ children, ...props }, ref) => {
    return (
      <OptionContainer { ...props } ref={ ref }>
        <OptionTextContainer>
          <SelectPrimitive.ItemText>
            {children}
          </SelectPrimitive.ItemText>
        </OptionTextContainer>
        <SelectPrimitive.ItemIndicator>
          <Check />
        </SelectPrimitive.ItemIndicator>
      </OptionContainer>
    )
  }
)

SelectOption.displayName = 'Select.Option'
