import { StateSchema } from '@/app/providers/store-provider'

export const getUserInited = (state: StateSchema) => state.user._inited
