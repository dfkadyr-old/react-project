import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/user'
import { classNames } from '@/shared/lib/class-names'
import { AppLink, AppLinkTheme } from '@/shared/ui/app-link'

import { SidebarItemType } from '../../model/types/sidebar'

import cls from './sidebar-item.module.scss'

interface SidebarItemProps {
  item: SidebarItemType
  isCollapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, isCollapsed } = props
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) return null

  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={classNames(cls.item, { [cls.collapsed]: isCollapsed }, [])}
    >
      <item.Icon />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  )
})
