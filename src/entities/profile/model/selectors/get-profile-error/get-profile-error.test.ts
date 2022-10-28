import { StateSchema } from 'app/providers/store-provider'

import { getProfileError } from './get-profile-error'

describe('getProfileError test', () => {
  test('get Profile Error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'Test Error'
      }
    }
    expect(getProfileError(state as StateSchema)).toEqual('Test Error')
  })
  test('should return with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
