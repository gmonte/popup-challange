import {
  CSSProperties,
  PropsWithChildren
} from 'react'

import { Label } from '../Label'
import {
  Root,
  RootContainer
} from './styles'

export type TextInputRootProps = PropsWithChildren<{
  error?: string
  style?: CSSProperties
  label?: string
  name?: string
}>

export function TextInputRoot ({
  children,
  error,
  name,
  label,
  style
}: TextInputRootProps) {
  return (
    <Root>
      {(!!label || !!error) && (
        <Label label={ label } error={ error } inputName={ name } />
      )}
      <RootContainer style={ style } $error={ !!error }>
        {children}
      </RootContainer>
    </Root>
  )
}

TextInputRoot.displayName = 'TextInput.Root'
