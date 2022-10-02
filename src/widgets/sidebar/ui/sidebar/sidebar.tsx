import { t } from 'i18next'
import { useState } from 'react'

import { classNames } from 'shared/lib/class-names'
import { Button } from 'shared/ui/button'
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
      <Button data-testid="sidebar-toggle" onClick={onToggle}>{t('toggle')}</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}
