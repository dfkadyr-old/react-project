import { StateSchema } from 'app/providers/store-provider'

export const getCounter = (state: StateSchema) => state.counter
