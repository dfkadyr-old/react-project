import { Menu } from '@headlessui/react'
import { Fragment, memo, ReactNode } from 'react'

import { classNames } from '@/shared/lib/class-names'
import { DropdownDirection } from '@/shared/types/ui'

import { AppLink } from '../../../app-link'
import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

import cls from './dropdown.module.scss'

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

export const Dropdown = memo((props: DropdownProps) => {
  const { className, trigger, items, direction = 'bottom right' } = props
  const menuClasses = [mapDirectionClass[direction]]

  return (
    <Menu as="div" className={classNames(cls.dropdown, {}, [className, popupCls.popup])}>
      <Menu.Button as="div" role="button" className={popupCls.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, { [popupCls.active]: active })}
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
