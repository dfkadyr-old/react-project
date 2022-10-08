import { DeepPartial } from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/store-provider'

import { getCounter } from './get-counter'

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    }
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})
