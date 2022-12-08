import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import {
  ArticleSortField, ArticleSortSelector, ArticleType, ArticleView, ArticleViewSelector, ArticleTypeTabs
} from '@/entities/article'
import { classNames } from '@/shared/lib/class-names'
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch'
import { useDebounce } from '@/shared/lib/hooks/use-debounce'
import { SortOrder } from '@/shared/types'
import { Card } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'

import {
  getArticlesPageOrder, getArticlesPageSearch,
  getArticlesPageSort, getArticlesPageType,
  getArticlesPageView
} from '../../model/selectors/articles-page-selectors'
import { fetchArticlesList } from '../../model/services/fetch-articles-list'
import { articlesPageActions } from '../../model/slices/article-page-slice'

import cls from './articles-page-filters.module.scss'

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)
  const order = useSelector(getArticlesPageOrder)
  const sort = useSelector(getArticlesPageSort)
  const search = useSelector(getArticlesPageSearch)
  const type = useSelector(getArticlesPageType)

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search))
    dispatch(articlesPageActions.setPage(1))
    debouncedFetchData()
  }, [debouncedFetchData, dispatch])

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlesPageActions.setType(value))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  return (
    <div className={classNames('', {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector order={order} sort={sort} onChangeSort={onChangeSort} onChangeOrder={onChangeOrder} />
        <ArticleViewSelector view={view} onViewClick={onChangeView}/>
      </div>
      <Card className={cls.search}>
        <Input value={search} placeholder={t('Search')} onChange={onChangeSearch}/>
      </Card>
      <ArticleTypeTabs onChangeType={onChangeType} value={type} className={cls.tabs}/>
    </div>
  )
})
