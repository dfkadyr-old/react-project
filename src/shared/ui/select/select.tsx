import { ChangeEvent, memo, useCallback, useMemo } from 'react'

import { classNames, Mods } from 'shared/lib/class-names'

import cls from './select.module.scss'

interface SelectOptions {
  label: string
  value: string
}

interface SelectProps {
  className?: string
  label?: string
  options: SelectOptions[]
  value?: string
  isReadonly?: boolean
  onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, value, onChange, isReadonly } = props
  const mods: Mods = {}

  const optionList = useMemo(() => {
    return options?.map(opt => (
      <option key={opt.value} className={cls.option} value={opt.value}>{opt.label}</option>
    ))
  }, [options])

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }, [onChange])

  return (
    <div className={classNames(cls.selectWrapper, mods, [className])}>
      {label && <div className={cls.label}>{label + '>'}</div>}
      <select disabled={isReadonly} className={cls.select} value={value} onChange={onChangeHandler}>
        {optionList}
      </select>
    </div>
  )
})
