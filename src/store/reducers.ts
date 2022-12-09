import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { stepSlice } from './steps'
import { appSlice } from './app'

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: [appSlice.name]
}

const rootReducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
  [stepSlice.name]: stepSlice.reducer
})

export const reducers = persistReducer(rootPersistConfig, rootReducer)
