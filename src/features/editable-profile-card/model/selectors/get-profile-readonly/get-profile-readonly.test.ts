import { StateSchema } from '@/app/providers/store-provider'

import { getProfileReadonly } from './get-profile-readonly'

describe('getProfileReadonly test', () => {
  test('should return readonly', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true
      }
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(true)
  })
  test('should return with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
  })
})
