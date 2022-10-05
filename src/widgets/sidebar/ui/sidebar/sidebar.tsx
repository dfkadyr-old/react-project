import { t } from 'i18next'
import { useState } from 'react'

import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import { RoutePath } from 'shared/config/route-config'
import { classNames } from 'shared/lib/class-names'
import { AppLink, AppLinkTheme } from 'shared/ui/app-link'
import { Button, ButtonTheme } from 'shared/ui/button'
import { ButtonSize } from 'shared/ui/button/button'
import { LangSwitcher } from 'widgets/lang-switcher'
import { ThemeSwitcher } from 'widgets/theme-switcher'

import cls from './sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps): JSX.Element => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => setCollapsed(prev => !prev)

  return (
    <div data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<' }
      </Button>
      <div className={cls.items}>
        <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY} className={cls.item}>
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t('Home')}</span>
        </AppLink>
        <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY} className={cls.item}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('About')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  )
}
