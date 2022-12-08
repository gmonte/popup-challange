import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { stepSlice } from './steps'

const rootPersistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  [stepSlice.name]: stepSlice.reducer
})

export const reducers = persistReducer(rootPersistConfig, rootReducer)
