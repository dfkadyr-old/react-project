import { memo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

import { classNames } from '@/shared/lib/class-names'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/dynamic-module-loader'
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch'
import { useInitialEffect } from '@/shared/lib/hooks/use-initial-effect'
import { Page } from '@/widgets/page'

import { fetchNextArticlesPage } from '../../model/services/fetch-next-articles-page'
import { initArticlesPage } from '../../model/services/init-articles-page'
import { articlesPageReducer } from '../../model/slices/article-page-slice'
import { ArticleInfiniteList } from '../article-infinite-list'
import { ArticlesPageFilters } from '../articles-page-filters'

import cls from './articles-page.module.scss'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

export const ArticlesPage = memo((props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        dataTestId="ArticlesPage"
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlesPageFilters />
        <ArticleInfiniteList className={cls.list} />
      </Page>
    </DynamicModuleLoader>
  )
})
