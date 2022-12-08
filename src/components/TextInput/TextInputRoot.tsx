import { PropsWithChildren } from 'react';
import { Root, RootContainer, Error } from './styles'

export type TextInputRootProps = PropsWithChildren<{
  error?: string
}>

export function TextInputRoot({
  children,
  error
}: TextInputRootProps) {
  return (
    <Root>
      <RootContainer>
        {children}
      </RootContainer>
      {error && (
        <Error>
          {error}
        </Error>
      )}
    </Root>
  );
}

TextInputRoot.displayName = 'TextInput.Root'