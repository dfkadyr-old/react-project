import { createSelector } from '@reduxjs/toolkit'

import { CounterSchema } from '../../types/counter-schema'
import { getCounter } from '../get-counter'

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value
)
