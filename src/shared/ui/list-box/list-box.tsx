import { Listbox as HListbox } from '@headlessui/react'
import { Fragment, memo, ReactNode } from 'react'

import { classNames } from 'shared/lib/class-names'

import { Button } from '../button'
import { HStack } from '../stack'

import cls from './list-box.module.scss'

interface Option {
  value: string
  label: ReactNode
  disabled?: boolean
}

type DropdownDirection = 'top' | 'bottom'

interface ListBoxProps {
  options?: Option[]
  className?: string
  value?: string
  label?: string
  defaultValue?: string
  onChange: (value: string) => void
  readonly?: boolean
  direction?: DropdownDirection
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottom: cls.optionsBottom,
  top: cls.optionsTop
}

export const ListBox = memo((props: ListBoxProps) => {
  const { className, options, value, defaultValue, readonly, onChange, label, direction = 'bottom' } = props
  const optionsClasses = [mapDirectionClass[direction]]

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListbox
        disabled={readonly}
        as={'div'}
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button disabled={readonly} className={cls.trigger}>
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListbox.Button>
        <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {options?.map((option) => (
            <HListbox.Option
              key={option.value}
              value={option.value}
              as={Fragment}
              disabled={option.disabled}
            >
              {({ active, selected }) => (
                <li className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: option.disabled }, [])}>
                  {selected && '!!!'}
                  {option.label}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  )
})
