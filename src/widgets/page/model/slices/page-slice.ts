import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PageSchema } from '../types/page-schema'

const initialState: PageSchema = {
  scroll: {}
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position
    }
  }
})

// Action creators are generated for each case reducer function
export const { actions: pageActions } = pageSlice
export const { reducer: pageReducer } = pageSlice
