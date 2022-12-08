import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'

import { reducers } from './reducers'

export const store = configureStore({
  reducer: reducers,
  devTools: true, // import.meta.env.MODE === 'development',
  middleware(getDefaultMiddleware) {
    const middlewares = getDefaultMiddleware({ serializableCheck: false })

    if (import.meta.env.MODE === 'development') {
      middlewares.push(createLogger({}))
    }

    return middlewares
  }
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
