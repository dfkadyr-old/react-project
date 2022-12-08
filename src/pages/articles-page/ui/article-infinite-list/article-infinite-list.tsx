import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { ArticleList } from '@/entities/article'
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch'
import { useInitialEffect } from '@/shared/lib/hooks/use-initial-effect'
import { Text } from '@/shared/ui/text'

import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articles-page-selectors'
import { initArticlesPage } from '../../model/services/init-articles-page'
import { getArticles } from '../../model/slices/article-page-slice'

interface ArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const view = useSelector(getArticlesPageView)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  if (error) {
    return <Text text={t('Error loading articles')} />
  }

  return (
      <ArticleList isLoading={isLoading} view={view} articles={articles} className={className} />
  )
})
