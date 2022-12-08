import { StateSchema } from '@/app/providers/store-provider'

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || ''
