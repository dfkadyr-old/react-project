import { memo, ReactNode, useCallback } from 'react'

import { classNames } from '@/shared/lib/class-names'

import { Card, CardTheme } from '../card'

import cls from './tabs.module.scss'

export interface TabItem<T extends string> {
  value: T
  content: ReactNode
}

interface TabsProps<T extends string> {
  className?: string
  tabs: Array<TabItem<T>>
  value: T
  onTabClick: (tab: TabItem<T>) => void
}

const typedMemo: <T>(c: T) => T = memo

export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
  const { className, tabs, value, onTabClick } = props

  const clickHandle = useCallback(
    (tab: TabItem<T>) => () => {
      onTabClick(tab)
    },
    [onTabClick]
  )

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
})
