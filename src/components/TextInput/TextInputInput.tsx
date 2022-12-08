import { forwardRef, InputHTMLAttributes } from 'react'
import { Input } from './styles'

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>

export const TextInputInput = forwardRef<HTMLInputElement, TextInputInputProps>(
  (props, ref) => {
    return (
      <Input ref={ ref } {...props} />
    )
  },
)

TextInputInput.displayName = 'TextInput.Input'