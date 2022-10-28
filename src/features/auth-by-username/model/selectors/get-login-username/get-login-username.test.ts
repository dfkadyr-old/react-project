import { StateSchema } from 'app/providers/store-provider'

import { getLoginUsername } from './get-login-username'

describe('getLoginUsername', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin'
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('admin')
  })
  test('should return with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
