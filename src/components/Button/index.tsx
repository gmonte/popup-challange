import { ButtonHTMLAttributes } from 'react'

import {
  Default,
  Primary
} from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'primary'
}

export function Button ({
  variant = 'default',
  ...props
}: ButtonProps) {
  if (variant === 'primary') {
    return <Primary { ...props } />
  }
  return <Default { ...props } />
}
