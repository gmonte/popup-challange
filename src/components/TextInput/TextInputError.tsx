import { PropsWithChildren } from 'react';
import { Root } from './styles'

export type TextInputErrorProps = PropsWithChildren

export function TextInputError({ children }: TextInputErrorProps) {
  return (
    <Root>
      {children}
    </Root>
  );
}

TextInputError.displayName = 'TextInput.Error'