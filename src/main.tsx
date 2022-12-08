import React from 'react'
import ReactDOM from 'react-dom/client'
import uuid from 'short-uuid'

import App from './App'
import { ModalsProvider } from './hooks/useModal'
import { StoreProvider } from './store'

const rootDivId = `popup-${ uuid().new() }`

document.body.innerHTML += `<div id="${rootDivId}"></div>`

ReactDOM.createRoot(document.getElementById(rootDivId) as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <ModalsProvider>
        <App rootDivId={rootDivId} />
      </ModalsProvider>
    </StoreProvider>
  </React.StrictMode>
)
