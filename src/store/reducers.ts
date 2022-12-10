import { combineReducers } from 'redux'
import {
  persistReducer,
  createMigrate,
  MigrationManifest,
  PersistedState
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { stepsSlice } from './steps'

const migrations: MigrationManifest = {
  0: state => state,
  1: (state) => ({
    ...state,
    steps: stepsSlice.getInitialState()
  }) as PersistedState
}

const rootPersistConfig = {
  key: 'root',
  storage,
  version: 1,
  migrate: createMigrate(migrations, { debug: false })
}

const rootReducer = combineReducers({ [stepsSlice.name]: stepsSlice.reducer })

export const reducers = persistReducer(rootPersistConfig, rootReducer)
