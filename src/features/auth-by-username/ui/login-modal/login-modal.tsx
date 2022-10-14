import { classNames } from 'shared/lib/class-names'
import { Modal } from 'shared/ui/modal'

import { LoginForm } from '../login-form'

import cls from './login-modal.module.scss'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
      className={classNames(cls.loginModal, {}, [className])}>
      <LoginForm />
    </Modal>
  )
}
