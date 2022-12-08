import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/store-provider'
import { User, userActions } from '@/entities/user'
import { AUTH_USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername =
  createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
      const { extra, rejectWithValue, dispatch } = thunkAPI
      try {
        const response = await extra.api.post<User>('/login', authData)

        if (!response.data) {
          throw new Error()
        }

        localStorage.setItem(AUTH_USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
        dispatch(userActions.setAuthData(response.data))
        return response.data
      } catch (e) {
        console.error(e)
        return rejectWithValue('Incorrect username or password')
      }
    }
  )
