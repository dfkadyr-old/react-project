import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from 'app/providers/store-provider'
import { Profile } from 'entities/profile'

import { getProfileForm } from '../../selectors/get-profile-form'
import { ValidateProfileErrors } from '../../types/editable-profile-card-schema'
import { validateProfileData } from '../validate-profile-data'

export const updateProfileData =
  createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileErrors[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
      const { extra, rejectWithValue, getState } = thunkAPI
      const formData = getProfileForm(getState())
      const errors = validateProfileData(formData)

      if (errors.length) {
        return rejectWithValue(errors)
      }

      try {
        const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData)

        if (!response.data) {
          throw new Error()
        }

        return response.data
      } catch (e) {
        console.error(e)
        return rejectWithValue([ValidateProfileErrors.SERVER_ERROR])
      }
    }
  )
