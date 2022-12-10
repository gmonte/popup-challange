import {
  Container,
  LabelStyled,
  Error
} from './styles'

export interface LabelProps {
  children?: string
  error?: string
  inputName?: string
}

export function Label ({
  children,
  error,
  inputName
}: LabelProps) {
  return (
    <Container>
      {children && (
        <LabelStyled $error={ !!error } htmlFor={ inputName }>
          {children}{':'}
        </LabelStyled>
      )}
      {error && (
        <Error style={ { padding: 0 } }>
          {error}
        </Error>
      )}
    </Container>
  )
}
