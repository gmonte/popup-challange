import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { GlobalStyle } from './globalStyles'
import { ModalsProvider } from './hooks/useModal'
import { StoreProvider } from './store'
import { rootDivId } from './utils/dom'

ReactDOM.createRoot(document.getElementById(rootDivId) as HTMLElement).render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <StoreProvider>
        <ModalsProvider>
          <App />
        </ModalsProvider>
      </StoreProvider>
    </>
  </React.StrictMode>
)
