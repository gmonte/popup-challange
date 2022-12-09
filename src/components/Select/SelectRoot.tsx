import * as SelectPrimitive from '@radix-ui/react-select'
import { ArrowDown, ArrowUp, X } from 'phosphor-react'
import { forwardRef, PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { selectPortalDivId } from '~/store/app/selectors'
import { TextInput } from '../TextInput'

import {
  Container,
  Trigger,
  Content,
  SelectedValueContainer,
  ScrollUpButton,
  ScrollDownButton,
  Value
} from './styles'

export type SelectRootProps = SelectPrimitive.SelectProps & PropsWithChildren<{
  placeholder?: string
  error?: string
}>

export const SelectRoot = forwardRef<HTMLButtonElement, SelectRootProps>(
  ({
    children,
    placeholder,
    error,
    ...props
  }, ref) => {
    const portalDivId = useSelector(selectPortalDivId)

    const hasValue = props.value !== undefined

    return (
      <Container>
        <SelectPrimitive.Root {...props}>
          <Trigger ref={ref}>
            
            <TextInput.Root error={error}>
              <SelectedValueContainer>
                <SelectPrimitive.Value asChild>
                  <Value $hasValue={hasValue}>
                    {props.value || placeholder}
                  </Value>
                </SelectPrimitive.Value>
              </SelectedValueContainer>

              <TextInput.Icon>
                <ArrowDown />
              </TextInput.Icon>

            </TextInput.Root>

          </Trigger>

          <SelectPrimitive.Portal container={document.getElementById(portalDivId)}>
            <Content>
              <ScrollUpButton>
                <ArrowUp color="white" weight="bold" />
              </ScrollUpButton>
              <SelectPrimitive.Viewport>
                {children}
              </SelectPrimitive.Viewport>
              <ScrollDownButton>
                <ArrowDown color="white" />
              </ScrollDownButton>
            </Content>
          </SelectPrimitive.Portal>

        </SelectPrimitive.Root>
      </Container>
    )
  }
)

SelectRoot.displayName = 'Select.Root'
