import { Suspense } from 'react'

import { Modal } from '@/shared/ui/modal'
import { Spinner } from '@/shared/ui/spinner'

import { LoginForm } from '../login-form'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
  const { isOpen, onClose } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Spinner />}>
        <LoginForm onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
