import { StateSchema } from 'app/providers/store-provider'

import { ValidateProfileErrors } from '../../types/editable-profile-card-schema'

import { getProfileValidateErrors } from './get-profile-validate-errors'

const errors = [
  ValidateProfileErrors.SERVER_ERROR,
  ValidateProfileErrors.NO_DATA,
  ValidateProfileErrors.INCORRECT_USER_DATA,
  ValidateProfileErrors.INCORRECT_AGE,
  ValidateProfileErrors.INCORRECT_COUNTRY
]

describe('getProfileValidateErrors test', () => {
  test('should return ValidateErrors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors
      }
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors)
  })
  test('should return with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
