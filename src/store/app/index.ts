import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'

import { ReducerState } from '~/@types/App'

const initialState: ReducerState = {
  rootDivId: '',
  portalDivId: ''
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setRootDivId (state, { payload }: PayloadAction<string>) {
      state.rootDivId = payload
    },
    setPortalDivId (state, { payload }: PayloadAction<string>) {
      state.portalDivId = payload
    }
  }
})

export const appsActions = appSlice.actions
