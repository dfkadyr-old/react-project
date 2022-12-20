import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/class-names'
import { ListBox } from '@/shared/ui/popups'

import { Country } from '../../model/types/country'

interface CountrySelectProps {
  className?: string
  value?: Country
  isReadonly?: boolean
  onChange: (value: Country) => void
}

const options = [
  { value: Country.Russia, label: Country.Russia },
  { value: Country.Ukraine, label: Country.Ukraine },
  { value: Country.Armenia, label: Country.Armenia },
  { value: Country.Belarus, label: Country.Belarus },
  { value: Country.Kazakhstan, label: Country.Kazakhstan }
]

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, isReadonly } = props
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange(value as Country)
  }, [onChange])

  return (
    <ListBox
      label={t('Add country')}
      options={options}
      value={value}
      readonly={isReadonly}
      onChange={onChangeHandler}
      className={classNames('', {}, [className])} />
  )
})
