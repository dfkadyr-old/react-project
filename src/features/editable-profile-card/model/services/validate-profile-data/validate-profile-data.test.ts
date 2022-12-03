import { Country } from 'entities/country'
import { Currency } from 'entities/currency'

import { ValidateProfileErrors } from '../../consts'

import { validateProfileData } from './validate-profile-data'

const cardData = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'last',
  first: 'admin',
  currency: Currency.RUB,
  city: 'Istanbul'
}

describe('validate-profile-data.test', () => {
  test('success', () => {
    const result = validateProfileData(cardData)
    expect(result).toEqual([])
  })

  test('without first and last name', () => {
    const result = validateProfileData({ ...cardData, first: '', lastname: '' })
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA])
  })

  test('incorrect country', () => {
    const result = validateProfileData({ ...cardData, country: undefined })
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY])
  })

  test('incorrect age', () => {
    const result = validateProfileData({ ...cardData, age: NaN })
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE])
  })

  test('incorrect all', () => {
    const result = validateProfileData({})
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_COUNTRY
    ])
  })
})
