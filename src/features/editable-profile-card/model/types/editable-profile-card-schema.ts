import { Profile } from '@/entities/profile'

import { ValidateProfileErrors } from '../consts'

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateErrors?: ValidateProfileErrors[]
}
