import { combineReducers } from 'redux'
import { persistReducer, createMigrate, MigrationManifest } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { stepSlice } from './steps'

const migrations: MigrationManifest = {
  0: (state) => state
}

const rootPersistConfig = {
  key: 'root',
  storage,
  version: 0,
  migrate: createMigrate(migrations, { debug: false })
}

const rootReducer = combineReducers({
  [stepSlice.name]: stepSlice.reducer
})

export const reducers = persistReducer(rootPersistConfig, rootReducer)
