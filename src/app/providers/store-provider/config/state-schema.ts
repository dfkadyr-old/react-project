// export interface CounterState {
//   value: number
// }

import { CounterSchema } from 'entities/counter'
import { UserSchema } from 'entities/user'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
}
