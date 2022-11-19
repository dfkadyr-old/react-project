import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { ArticleList } from 'entities/article'
import { classNames } from 'shared/lib/class-names'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader'
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch'
import { useInitialEffect } from 'shared/lib/hooks/use-initial-effect'
import { Page } from 'widgets/page'

import {
  getArticlesPageIsLoading, getArticlesPageView
} from '../../model/selectors/articles-page-selectors'
import { fetchNextArticlesPage } from '../../model/services/fetch-next-articles-page'
import { initArticlesPage } from '../../model/services/init-articles-page'
import { articlesPageReducer, getArticles } from '../../model/slices/article-page-slice'
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
  const articles = useSelector(getArticles.selectAll)
  const view = useSelector(getArticlesPageView)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const [searchParams] = useSearchParams()

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticlesPageFilters />
        <ArticleList isLoading={isLoading} view={view} articles={articles} className={cls.list} />
      </Page>
    </DynamicModuleLoader>
  )
})
