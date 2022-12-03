import { Country } from 'entities/country'
import { Currency } from 'entities/currency'

import { ValidateProfileErrors } from '../../model/consts'
import { updateProfileData } from '../../model/services/update-profile-data'
import { ProfileSchema } from '../../model/types/editable-profile-card-schema'

import { profileReducer, profileActions } from './profile-slice'

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'last',
  first: 'admin',
  currency: Currency.RUB,
  city: 'Istanbul'
}

describe('profile-slice.test', () => {
  test('test setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true)
    )).toEqual({ readonly: true })
  })
  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = { data }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit()
    )).toEqual({ readonly: true, validateErrors: undefined, data, form: data })
  })
  test('test updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({
        username: 'admin'
      })
    )).toEqual({ form: { username: 'admin' } })
  })
  test('test updateProfile isPending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR]
    }
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending
    )).toEqual({
      isLoading: true,
      validateErrors: undefined
    })
  })
  test('test updateProfile fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true
    }
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, '')
    )).toEqual({
      isLoading: false,
      data,
      form: data,
      readonly: true,
      validateErrors: undefined
    })
  })
})
