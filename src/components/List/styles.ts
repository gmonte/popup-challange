import styled from 'styled-components'

export const Root = styled.div<{
  $numberOfColumns: number
}>`
  display: grid;
  grid-template-columns: repeat(${ ({ $numberOfColumns }) => $numberOfColumns }, 1fr);
`

export const Item = styled.div`
  color: white;
  padding: 5px;
`