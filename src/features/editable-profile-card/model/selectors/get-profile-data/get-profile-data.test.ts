import { StateSchema } from 'app/providers/store-provider'
import { Country } from 'entities/country'
import { Currency } from 'entities/currency'

import { getProfileData } from './get-profile-data'

const cardData = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'last',
  first: 'admin',
  currency: Currency.RUB,
  city: 'Istanbul'
}

describe('getProfileData test', () => {
  test('get Profile Data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: cardData
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual(cardData)
  })
  test('should return with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
