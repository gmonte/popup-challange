import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 4px;
  padding: 8px 16px;
  color: #ffffff;
  font-weight: bold;
  font-family: 'Inter';
  border: none;
  cursor: pointer;
  background: linear-gradient(90deg, rgb(64, 52, 81) 0%, rgb(34, 19, 44) 100%);

  &:active {
    background: linear-gradient(137.04deg, rgba(64, 52, 81, 0.6) 33.4%, rgba(34, 19, 44, 0.6) 82.8%);
  }
`

export const ButtonPrimary = styled(Button)`
  background: linear-gradient(137.04deg, rgb(162, 52, 225) 33.4%, rgb(88, 68, 195) 82.8%);
  
  &:active {
    background: linear-gradient(137.04deg, rgba(162, 52, 225, 0.6) 33.4%, rgba(88, 68, 195, 0.6) 82.8%);
  }
`