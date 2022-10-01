import { classNames } from 'shared/lib/class-names'
import { useState } from 'react'
import { t } from 'i18next'
import { ThemeSwitcher } from 'widgets/theme-switcher'
import { LangSwitcher } from 'widgets/lang-switcher'
import cls from './sidebar.module.scss'
import { Button } from 'shared/ui/button'

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
