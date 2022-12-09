import { Container, LabelStyled, Error } from './styles'

export type LabelProps = {
  label?: string
  error?: string
  inputName?: string
}

export function Label({
  label,
  error,
  inputName
}: LabelProps) {
  return (
    <Container>
      {label && (
        <LabelStyled $error={!!error} htmlFor={inputName}>
          {label}
        </LabelStyled>
      )}
      {error && (
        <Error style={{ padding: 0 }}>
          {error}
        </Error>
      )}
    </Container>
  )
}
