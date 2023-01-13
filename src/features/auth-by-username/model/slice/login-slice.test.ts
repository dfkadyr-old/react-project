import { LoginSchema } from '../types/login-schema'

import { loginReducer, loginActions } from './login-slice'

describe('login-slice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'admin' }
    expect(loginReducer(state as LoginSchema, loginActions.setUserName('123123'))).toEqual({ username: '123123' })
  })

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '1234' }
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123123'))).toEqual({ password: '123123' })
  })
})
