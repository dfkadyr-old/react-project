import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/user'
import { RoutePath } from 'shared/config/route-config'
import { classNames } from 'shared/lib/class-names'
import { Avatar } from 'shared/ui/avatar'
import { Dropdown } from 'shared/ui/popups'

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props

  const { t } = useTranslation()
  const dispatch = useDispatch()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const authData = useSelector(getUserAuthData)

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const isAdminPanelAvailable = isAdmin || isManager

  if (!authData) {
    return null
  }

  return (
      <Dropdown
        className={classNames('', {}, [className])}
        direction={'bottom left'}
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
        trigger={<Avatar size={30} src={authData.avatar} />}
      />
  )
})
