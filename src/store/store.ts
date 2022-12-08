import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'

import { reducers } from './reducers'

const devMode = true // import.meta.env.MODE === 'development'

export const store = configureStore({
  reducer: reducers,
  devTools: devMode,
  middleware(getDefaultMiddleware) {
    const middlewares = getDefaultMiddleware({ serializableCheck: false })

    if (devMode) {
      middlewares.push(createLogger({}))
    }

    return middlewares
  }
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
