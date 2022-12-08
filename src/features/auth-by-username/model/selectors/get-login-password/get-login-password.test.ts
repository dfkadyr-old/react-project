import { StateSchema } from '@/app/providers/store-provider'

import { getLoginPassword } from './get-login-password'

describe('getLoginPassword', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123'
      }
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('123')
  })
  test('should return with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})
