import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{
  rootDivId: string
}>`
  #${ ({ rootDivId }) => rootDivId } {
    font-family: 'Inter', Open-Sans, Helvetica, Sans-Serif;
  }
`
