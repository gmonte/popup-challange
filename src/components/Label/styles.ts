import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`

export const LabelStyled = styled.label<{ $error: boolean }>`
  color: ${ ({ $error }) => $error ? '#f8b4b4' : '#f2f3e6' };
  font-size: 1rem;
`

export const Error = styled.p`
  margin: 0;
  padding-left: 5px;
  padding-top: 6px;
  color: #f8b4b4;
  text-align: left;
  font-size: 0.85rem;
`
