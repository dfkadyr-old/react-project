import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleType } from '@/entities/article'
import { classNames } from '@/shared/lib/class-names'
import { TabItem, Tabs } from '@/shared/ui/tabs'

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props
  const { t } = useTranslation()

  const typeTabs = useMemo<TabItem<ArticleType>[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t('All article')
      },
      {
        value: ArticleType.IT,
        content: t('It')
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('Economics')
      },
      {
        value: ArticleType.SCIENCE,
        content: t('Science')
      }
    ],
    [t]
  )

  const onTabClick = useCallback(
    (tab: TabItem<ArticleType>) => {
      onChangeType(tab.value)
    },
    [onChangeType]
  )

  return (
    <div className={classNames('', {}, [className])}>
      <Tabs<ArticleType> tabs={typeTabs} value={value} onTabClick={onTabClick} />
    </div>
  )
})
