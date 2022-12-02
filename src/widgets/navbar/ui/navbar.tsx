import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/user'
import { LoginModal } from 'features/auth-by-username'
import { RoutePath } from 'shared/config/route-config'
import { classNames } from 'shared/lib/class-names'
import { AppLink, AppLinkTheme } from 'shared/ui/app-link'
import { Avatar } from 'shared/ui/avatar'
import { Button, ButtonTheme } from 'shared/ui/button'
import { Dropdown } from 'shared/ui/dropdown'
import { Text, TextTheme } from 'shared/ui/text'

import cls from './navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = memo((props: NavbarProps): JSX.Element => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

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

  const isAdminPanelAvailable = isAdmin || isManager

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <Text className={cls.appName} title={t('dfkadyr App')} theme={TextTheme.INVERTED} />
        <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY}>
          {t('Create article')}
        </AppLink>
        <Dropdown
          direction={'bottom left'}
          className={cls.dropdown}
          items={[
            ...(isAdminPanelAvailable
              ? [{
                  content: t('Admin'),
                  href: RoutePath.admin_panel
                }]
              : []),
            {
              content: t('Profile'),
              href: RoutePath.profile + authData.id
            },
            {
              content: t('Logout'),
              onClick: onLogout
            }
          ]}
          trigger={<Avatar size={30} src={authData.avatar} />} />
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </header>
    )
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
        {t('Entry')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </header>
  )
})
