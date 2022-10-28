import { StateSchema } from 'app/providers/store-provider'

export const getProfileError = (state: StateSchema) => state?.profile?.error
