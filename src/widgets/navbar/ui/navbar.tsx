import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/user'
import { LoginModal } from '@/features/auth-by-username'
import { AvatarDropdown } from '@/features/avatar-dropdown'
import { NotificationButton } from '@/features/notification-button'
import { getRouteArticleCreate } from '@/shared/const/router'
import { classNames } from '@/shared/lib/class-names'
import { AppLink, AppLinkTheme } from '@/shared/ui/app-link'
import { Button, ButtonTheme } from '@/shared/ui/button'
import { HStack } from '@/shared/ui/stack'
import { Text, TextTheme } from '@/shared/ui/text'

import cls from './navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = memo((props: NavbarProps): JSX.Element => {
  const { className } = props
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <Text className={cls.appName} title={t('dfkadyr App')} theme={TextTheme.INVERTED} />
        <AppLink to={getRouteArticleCreate()} theme={AppLinkTheme.SECONDARY}>
          {t('Create article')}
        </AppLink>
        <HStack gap={'16'} className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    )
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
        {t('Entry')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} /> }
    </header>
  )
})
