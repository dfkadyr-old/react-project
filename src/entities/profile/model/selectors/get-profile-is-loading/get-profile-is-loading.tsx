import { StateSchema } from 'app/providers/store-provider'

export const getProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading
