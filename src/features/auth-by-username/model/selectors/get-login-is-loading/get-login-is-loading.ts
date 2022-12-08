import { StateSchema } from '@/app/providers/store-provider'

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading ?? false
