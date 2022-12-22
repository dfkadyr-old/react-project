import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/button'

import { useCounterValue } from '../model/selectors/get-counter-value'
import { useCounterActions } from '../model/slice/counter-slice'

export const Counter = () => {
  const { t } = useTranslation()
  const counterValue = useCounterValue()
  const { decrement, increment } = useCounterActions()

  const onIncrement = () => {
    increment()
  }

  const onDecrement = () => {
    decrement()
  }

  return (
    <div>
      <h1 data-testid="counter-value">{counterValue}</h1>
      <Button onClick={onIncrement} data-testid="increment-btn">{t('increment')}</Button>
      <Button onClick={onDecrement} data-testid="decrement-btn">{t('decrement')}</Button>
    </div>
  )
}
