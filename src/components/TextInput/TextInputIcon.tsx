import { PropsWithChildren } from 'react'

import { Icon } from './styles'

export type TextInputIconProps = PropsWithChildren

export function TextInputIcon ({ children }: TextInputIconProps) {
  return (
    <Icon>
      {children}
    </Icon>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'
