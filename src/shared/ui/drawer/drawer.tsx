import { ReactNode } from 'react'

import { classNames, Mods } from 'shared/lib/class-names'

import { Overlay } from '../overlay'
import { Portal } from '../portal'
import { VStack } from '../stack'

import cls from './drawer.module.scss'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Drawer = (props: DrawerProps) => {
  const {
    className,
    children,
    onClose,
    isOpen
  } = props

  const mods: Mods = {
    [cls.opened]: isOpen
  }

  return (
    <Portal>
      <VStack justify={'end'} className={classNames(cls.drawer, mods, [className])}>
        <Overlay onClick={onClose} />
        <div
          className={cls.content}
        >
          {children}
        </div>
      </VStack>
    </Portal>
  )
}
