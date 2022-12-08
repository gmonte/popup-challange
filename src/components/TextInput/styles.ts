import styled from 'styled-components'
import { Slot } from '@radix-ui/react-slot'

export const Root = styled.div`

`

export const Label = styled.div``

export const RootContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 4px;
  background-color: #12172d;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  margin-bottom: 12px;

  &:focus-within {
    box-shadow: 0 0 0 2px rgb(67, 55, 124);
  }
`

export const Input = styled.input`
  background-color: transparent;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border: none;
  flex: 1;
  font-family: 'Inter';
  color: #f2f3e6;
`

export const Icon = styled(Slot)`
  width: 1.5rem;
  height: 1.5rem;
  color: rgb(88, 68, 195);
`