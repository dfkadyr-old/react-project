import { StateSchema } from 'app/providers/store-provider'

export const getLoginState = (state: StateSchema) => state?.loginForm
