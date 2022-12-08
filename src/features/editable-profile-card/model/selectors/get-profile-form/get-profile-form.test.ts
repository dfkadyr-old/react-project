import { StateSchema } from '@/app/providers/store-provider'
import { Country } from '@/entities/country'
import { Currency } from '@/entities/currency'

import { getProfileForm } from './get-profile-form'

const formData = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'last',
  first: 'admin',
  currency: Currency.RUB,
  city: 'Istanbul'
}

describe('getProfileForm test', () => {
  test('get Profile form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: formData
      }
    }
    expect(getProfileForm(state as StateSchema)).toEqual(formData)
  })
  test('should return with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
