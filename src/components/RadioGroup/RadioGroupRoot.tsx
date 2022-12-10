import { forwardRef } from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { Label } from '../Label'
import {
  Container,
  GroupRoot
} from './styles'

export type RadioGroupRootProps = RadioGroupPrimitive.RadioGroupProps & {
  label?: string
  error?: string
}

export const RadioGroupRoot = forwardRef<HTMLDivElement, RadioGroupRootProps>(
  ({
    label,
    error,
    ...props
  }, ref) => {
    return (
      <Container>
        <Label error={ error } inputName={ props.name }>
          {label}
        </Label>
        <GroupRoot ref={ ref } { ...props } />
      </Container>
    )
  }
)

RadioGroupRoot.displayName = 'RadioGroup.Root'
