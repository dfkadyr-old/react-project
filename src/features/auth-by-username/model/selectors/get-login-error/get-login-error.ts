import { StateSchema } from '@/app/providers/store-provider'

export const getLoginError = (state: StateSchema) => state?.loginForm?.error
