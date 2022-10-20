import { memo, useMemo, useState } from 'react'

import { classNames } from 'shared/lib/class-names'
import { Button, ButtonTheme } from 'shared/ui/button'
import { ButtonSize } from 'shared/ui/button/button'
import { LangSwitcher } from 'widgets/lang-switcher'
import { ThemeSwitcher } from 'widgets/theme-switcher'

import { SidebarItemsList } from '../../model/item'
import { SidebarItem } from '../sidebar-item'

import cls from './sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps): JSX.Element => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => setCollapsed(prev => !prev)

  const listItems = useMemo(() =>
    SidebarItemsList.map((item) => <SidebarItem key={item.path} item={item} isCollapsed={collapsed} />
    ), [collapsed]
  )

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
        {listItems}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  )
})
