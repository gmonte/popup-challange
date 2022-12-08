import { PropsWithChildren } from 'react';
import { Icon } from './styles';

export function TextInputIcon({ children }: PropsWithChildren) {
  return (
    <Icon>
      {children}
    </Icon>
  );
}

TextInputIcon.displayName = 'TextInput.Icon'