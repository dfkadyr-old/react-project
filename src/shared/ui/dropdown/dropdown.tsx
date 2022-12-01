import { Menu } from '@headlessui/react'
import { Fragment, memo, ReactNode } from 'react'

import { classNames } from 'shared/lib/class-names'

import { AppLink } from '../app-link'

import cls from './dropdown.module.scss'

type DropdownDirection = 'top left' | 'top right' | 'bottom left' | 'bottom right'

interface DropdownItem {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  direction?: DropdownDirection
  trigger: ReactNode
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top right': cls.optionsTopRight,
  'top left': cls.optionsTopLeft
}

export const Dropdown = memo((props: DropdownProps) => {
  const {
    className, trigger, items, direction = 'bottom right'
  } = props
  const menuClasses = [mapDirectionClass[direction]]

  return (
    <Menu as="div" className={classNames(cls.dropdown, {}, [className])}>
      <Menu.Button as='div' role='button' className={cls.btn}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.active]: active })}
            >
              {item.content}
            </button>
          )

          if (item.href) {
            return (
              <Menu.Item key={item.href} as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })}

      </Menu.Items>
    </Menu>
  )
})