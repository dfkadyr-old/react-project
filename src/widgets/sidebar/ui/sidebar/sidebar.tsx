import { memo, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { LangSwitcher } from '@/features/lang-switcher'
import { ThemeSwitcher } from '@/features/theme-switcher'
import { classNames } from '@/shared/lib/class-names'
import { Button, ButtonTheme } from '@/shared/ui/button'
import { ButtonSize } from '@/shared/ui/button/button'
import { VStack } from '@/shared/ui/stack'

import { getSidebarItems } from '../../model/selectors/get-sidebar-items'
import { SidebarItem } from '../sidebar-item'

import cls from './sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps): JSX.Element => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemsList = useSelector(getSidebarItems)

  const onToggle = () => setCollapsed(prev => !prev)

  const listItems = useMemo(() =>
    sidebarItemsList.map((item) =>
      <SidebarItem
        key={item.path}
        item={item}
        isCollapsed={collapsed}
      />
    ), [collapsed, sidebarItemsList]
  )

  return (
    <section data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<' }
      </Button>
      <VStack role="navigation" gap="8" className={cls.items}>
        {listItems}
      </VStack>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </section>
  )
})
