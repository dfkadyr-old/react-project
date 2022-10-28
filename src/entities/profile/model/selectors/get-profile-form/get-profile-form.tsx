import { StateSchema } from 'app/providers/store-provider'

export const getProfileForm = (state: StateSchema) => state?.profile?.form
