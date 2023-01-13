import { ChangeEvent, memo, useCallback, useMemo } from 'react'

import { classNames, Mods } from '@/shared/lib/class-names'

import cls from './select.module.scss'

export interface SelectOption<T extends string> {
  label: string
  value: T
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options: Array<SelectOption<T>>
  value?: T
  isReadonly?: boolean
  onChange?: (value: T) => void
}

const typedMemo: <T>(c: T) => T = memo

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, onChange, isReadonly } = props
  const mods: Mods = {}

  const optionList = useMemo(() => {
    return options?.map((opt) => (
      <option key={opt.value} className={cls.option} value={opt.value}>
        {opt.label}
      </option>
    ))
  }, [options])

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value as T)
    },
    [onChange]
  )

  return (
    <div className={classNames(cls.selectWrapper, mods, [className])}>
      {label && <div className={cls.label}>{label + '>'}</div>}
      <select disabled={isReadonly} className={cls.select} value={value} onChange={onChangeHandler}>
        {optionList}
      </select>
    </div>
  )
})
