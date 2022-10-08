import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from 'shared/ui/button'

import { getCounterValue } from '../model/selectors/get-counter-value'
import { counterActions } from '../model/slice/counter-slice'

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector((getCounterValue))
  const { t } = useTranslation()

  const onIncrement = () => {
    dispatch(counterActions.increment())
  }

  const onDecrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid="counter-value">{counterValue}</h1>
      <Button onClick={onIncrement} data-testid="increment-btn">{t('increment')}</Button>
      <Button onClick={onDecrement} data-testid="decrement-btn">{t('decrement')}</Button>
    </div>
  )
}
