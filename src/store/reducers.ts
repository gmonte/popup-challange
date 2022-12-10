import { combineReducers } from 'redux'
import {
  persistReducer,
  createMigrate,
  MigrationManifest,
  PersistedState
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { appSlice } from './app'
import { stepsSlice } from './steps'

const migrations: MigrationManifest = {
  0: state => state,
  1: (state) => ({
    ...state,
    app: appSlice.getInitialState(),
    steps: stepsSlice.getInitialState()
  }) as PersistedState
}

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: [appSlice.name],
  version: 1,
  migrate: createMigrate(migrations, { debug: false })
}

const rootReducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
  [stepsSlice.name]: stepsSlice.reducer
})

export const reducers = persistReducer(rootPersistConfig, rootReducer)
