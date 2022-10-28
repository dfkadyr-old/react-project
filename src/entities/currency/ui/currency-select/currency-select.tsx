import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/class-names'
import { Select } from 'shared/ui/select'

import { Currency } from '../../model/types/currency'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  isReadonly?: boolean
  onChange: (value: Currency) => void
}

const options = [
  { value: Currency.USD, label: Currency.USD },
  { value: Currency.EUR, label: Currency.EUR },
  { value: Currency.RUB, label: Currency.RUB }
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, isReadonly } = props
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange(value as Currency)
  }, [onChange])

  return (
    <Select
      label={t('Add currency')}
      options={options}
      value={value}
      isReadonly={isReadonly}
      onChange={onChangeHandler}
      className={classNames('', {}, [className])} />
  )
})
