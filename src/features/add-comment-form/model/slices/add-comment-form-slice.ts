import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AddCommentFormSchema } from '../types/add-comment-form'

const initialState: AddCommentFormSchema = {
  isLoading: false,
  text: '',
  error: undefined
}

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
