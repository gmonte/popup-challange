import { FormEventHandler } from 'react'

import styled from 'styled-components'

const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault()
}

export const Form = styled.form.attrs({ onSubmit })`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
