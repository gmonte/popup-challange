import { PropsWithChildren } from 'react';
import { Root, RootContainer } from './styles'

export type TextInputRootProps = PropsWithChildren<{
  label?: string
  error?: string
}>

export function TextInputRoot({
  children,
  label,
  error
}: TextInputRootProps) {
  return (
    <Root>
      {label}
      <RootContainer>
        {children}
      </RootContainer>
      {error}
    </Root>
  );
}

TextInputRoot.displayName = 'TextInput.Root'