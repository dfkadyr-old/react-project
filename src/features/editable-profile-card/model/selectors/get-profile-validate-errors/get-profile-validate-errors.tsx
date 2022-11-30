import { StateSchema } from 'app/providers/store-provider'

export const getProfileValidateErrors = (state: StateSchema) => state?.profile?.validateErrors
