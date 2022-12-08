import { Country } from '@/entities/country'
import { Currency } from '@/entities/currency'
import { TestAsyncThunk } from '@/shared/lib/tests/test-async-thunk'

import { ValidateProfileErrors } from '../../consts'

import { updateProfileData } from './update-profile-data'

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'last',
  first: 'admin',
  currency: Currency.RUB,
  city: 'Istanbul'
}

describe('update-profile-data.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileErrors.SERVER_ERROR
    ])
  })

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' }
      }
    })
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA
    ])
  })
})
