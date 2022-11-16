import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/article'
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
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/article-page-slice'

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

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage())
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView}/>
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  )
})
