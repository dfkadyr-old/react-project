import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AUTH_USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

import { User, UserSchema } from '../types/user'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(AUTH_USER_LOCALSTORAGE_KEY)
      if (user) {
        state.authData = JSON.parse(user)
      }
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(AUTH_USER_LOCALSTORAGE_KEY)
    }
  }
})

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
