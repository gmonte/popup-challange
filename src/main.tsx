import React from 'react'
import ReactDOM from 'react-dom/client'
import uuid from 'short-uuid'

import { App } from './App'
import { GlobalStyle } from './globalStyles'
import { ModalsProvider } from './hooks/useModal'
import { StoreProvider } from './store'

const rootDivId = `popup-${ uuid().new() }`
const portalDivId = `${ rootDivId }-portal`

document.body.innerHTML += `
  <div id="${rootDivId}"></div>
  <div id="${portalDivId}"></div>
`

ReactDOM.createRoot(document.getElementById(rootDivId) as HTMLElement).render(
  <React.StrictMode>
    <>
      <GlobalStyle
        rootDivId={rootDivId}
        portalDivId={portalDivId}
      />
      <StoreProvider>
        <ModalsProvider>
          <App
            rootDivId={rootDivId}
            portalDivId={portalDivId}
          />
        </ModalsProvider>
      </StoreProvider>
    </>
  </React.StrictMode>
)
