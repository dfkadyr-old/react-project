import { StateSchema } from 'app/providers/store-provider'

export const getProfileReadonly = (state: StateSchema) => state?.profile?.readonly
