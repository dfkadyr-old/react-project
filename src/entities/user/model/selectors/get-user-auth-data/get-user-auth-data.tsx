import { StateSchema } from '@/app/providers/store-provider'

export const getUserAuthData = (state: StateSchema) => state.user.authData
