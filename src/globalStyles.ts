import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{
  rootDivId: string
  portalDivId: string
}>`
  #${ ({ rootDivId }) => rootDivId } {
    font-family: Open-Sans, Helvetica, Sans-Serif;

    & * {
      font-family: Open-Sans, Helvetica, Sans-Serif;
    }
  }

  #${ ({ portalDivId }) => portalDivId } {
    font-family: Open-Sans, Helvetica, Sans-Serif;

    & * {
      font-family: Open-Sans, Helvetica, Sans-Serif;
    }
  }
`
