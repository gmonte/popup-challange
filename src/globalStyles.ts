import { createGlobalStyle } from 'styled-components'

import {
  rootDivId,
  portalDivId
} from './utils/dom'

export const GlobalStyle = createGlobalStyle`
  #${ rootDivId } {
    font-family: Open-Sans, Helvetica, Sans-Serif;

    & * {
      font-family: Open-Sans, Helvetica, Sans-Serif;
    }
  }

  #${ portalDivId } {
    font-family: Open-Sans, Helvetica, Sans-Serif;

    & * {
      font-family: Open-Sans, Helvetica, Sans-Serif;
    }
  }
`
