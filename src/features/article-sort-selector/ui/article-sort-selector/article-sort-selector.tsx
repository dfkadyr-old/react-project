import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleSortField } from '@/entities/article'
import { classNames } from '@/shared/lib/class-names'
import { SortOrder } from '@/shared/types/sort'
import { Select, SelectOption } from '@/shared/ui/select'

import cls from './article-sort-selector.module.scss'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, onChangeSort, onChangeOrder, sort, order } = props
  const { t } = useTranslation()

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      label: t('ascending')
    },
    {
      value: 'desc',
      label: t('descending')
    }
  ], [t])

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      label: t('date of creation')
    },
    {
      value: ArticleSortField.TITLE,
      label: t('title')
    },
    {
      value: ArticleSortField.VIEWS,
      label: t('views')
    }
  ], [t])

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        label={t('Sort by')}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        label={t('by')}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>
  )
})
