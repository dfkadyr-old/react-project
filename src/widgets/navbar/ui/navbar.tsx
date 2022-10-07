import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/class-names'
import { Button, ButtonTheme } from 'shared/ui/button'
import { Modal } from 'shared/ui/modal'

import cls from './navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps): JSX.Element => {
  const { className } = props
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
        {t('Entry')}
      </Button>
        <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Cupiditate, dicta dolorem ex exercitationem facere fugiat impedit neque nobis repellat totam. ' +
            'At eos illo ipsa libero necessitatibus nulla numquam ut. Accusantium?')}
        </Modal>
    </div>
  )
}
