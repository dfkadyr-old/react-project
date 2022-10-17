import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { getUserAuthData, userActions } from 'entities/user'
import { LoginModal } from 'features/auth-by-username'
import { classNames } from 'shared/lib/class-names'
import { Button, ButtonTheme } from 'shared/ui/button'

import cls from './navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps): JSX.Element => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
    setIsAuthModal(false)
  }, [dispatch])

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onLogout}>
          {t('Logout')}
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </div>
    )
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
        {t('Entry')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
