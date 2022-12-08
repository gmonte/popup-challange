import styled from 'styled-components'

export const Form = styled.form.attrs({
  onSubmit: (e) => e.preventDefault()
})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
