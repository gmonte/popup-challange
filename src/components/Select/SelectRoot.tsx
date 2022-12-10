import {
  forwardRef,
  PropsWithChildren
} from 'react'

import * as SelectPrimitive from '@radix-ui/react-select'
import {
  ArrowDown,
  ArrowUp
} from 'phosphor-react'

import { portalDivId } from '~/utils/dom'

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
  label?: string
}>

export const SelectRoot = forwardRef<HTMLButtonElement, SelectRootProps>(
  ({
    children,
    placeholder,
    error,
    label,
    ...props
  }, ref) => {
    const hasValue = props.value !== undefined

    return (
      <Container>
        <SelectPrimitive.Root { ...props }>
          <Trigger ref={ ref }>

            <TextInput.Root error={ error } label={ label } name={ props.name }>
              <SelectedValueContainer>
                <SelectPrimitive.Value asChild>
                  <Value $hasValue={ hasValue }>
                    {/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
                    {props.value || placeholder}
                  </Value>
                </SelectPrimitive.Value>
              </SelectedValueContainer>

              <TextInput.Icon>
                <ArrowDown />
              </TextInput.Icon>

            </TextInput.Root>

          </Trigger>

          <SelectPrimitive.Portal container={ document.getElementById(portalDivId) }>
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
