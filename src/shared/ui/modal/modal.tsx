import { ReactNode } from 'react'

import { classNames, Mods } from 'shared/lib/class-names'
import { useModal } from 'shared/lib/hooks/use-modal'

import { Overlay } from '../overlay'
import { Portal } from '../portal'
import { VStack } from '../stack'

import cls from './modal.module.scss'

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy
  } = props

  const {
    close,
    isClosing,
    isMounted
  } = useModal({
    animationDelay: 300,
    onClose,
    isOpen
  })

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  if (lazy && !isMounted) return null

  return (
    <Portal>
      <VStack justify={'center'} align={'center'} className={classNames(cls.modal, mods, [className])}>
        <Overlay onClick={close} />
        <div
          className={cls.content}
        >
          {children}
        </div>
      </VStack>
    </Portal>
  )
}
