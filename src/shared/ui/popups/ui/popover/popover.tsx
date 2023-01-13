import { Popover as HPopover } from '@headlessui/react'
import { ReactNode } from 'react'

import { classNames } from '@/shared/lib/class-names'
import { DropdownDirection } from '@/shared/types/ui'

import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

import cls from './popover.module.scss'

interface PopoverProps {
  className?: string
  children: ReactNode
  trigger: ReactNode
  direction?: DropdownDirection
}

export const Popover = (props: PopoverProps) => {
  const { className, trigger, direction = 'bottom right', children } = props
  const menuClasses = [mapDirectionClass[direction]]

  return (
    <HPopover className={classNames('', {}, [className, popupCls.popup])}>
      <HPopover.Button as="div" role="button" className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>{children}</HPopover.Panel>
    </HPopover>
  )
}
