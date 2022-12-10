import {
  forwardRef,
  useMemo
} from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckSquare } from 'phosphor-react'
import uuid from 'short-uuid'

import { TextInput } from '../TextInput'
import {
  Root,
  ItemContainer,
  ItemLabel
} from './styles'

export type CheckboxProps = Omit<CheckboxPrimitive.CheckboxProps, 'asChild'> & {
  id?: string
  label: string
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({
    label,
    ...props
  }, ref) => {
    const id = useMemo(
      () => props.id || uuid().generate(),
      [props.id]
    )

    return (
      <TextInput.Root style={ { padding: 0 } }>
        <ItemContainer>
          <Root ref={ ref } id={ id } { ...props }>
            <CheckboxPrimitive.Indicator asChild>
              <CheckSquare data-testid={`${id}-checked-icon`} weight="fill" size={ 22 } color="rgba(65, 53, 180, 1)" />
            </CheckboxPrimitive.Indicator>
          </Root>
          <ItemLabel htmlFor={ id }>
            {label}
          </ItemLabel>
        </ItemContainer>
      </TextInput.Root>
    )
  }
)

Checkbox.displayName = 'Checkbox'
