import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { ArticleDetails, ArticleList } from 'entities/article'
import { CommentList } from 'entities/comment'
import { AddCommentForm } from 'features/add-comment-form'
import { RoutePath } from 'shared/config/route-config'
import { classNames } from 'shared/lib/class-names'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader'
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch'
import { useInitialEffect } from 'shared/lib/hooks/use-initial-effect'
import { Button } from 'shared/ui/button'
import { Text, TextSize } from 'shared/ui/text'
import { Page } from 'widgets/page'

import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations'
import { addCommentForArticle } from '../../model/services/add-comment-for-article'
import { fetchArticleRecommendations } from '../../model/services/fetch-article-recommendations'
import { fetchCommentsByArticleId } from '../../model/services/fetch-comments-by-article-id'
import { articleDetailsPageReducer } from '../../model/slices'
import { getArticleComments } from '../../model/slices/article-details-comments-slice'
import { getArticleRecommendations } from '../../model/slices/article-details-page-recommendations-slice'

import cls from './article-details-page.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

export const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const recommendationArticles = useSelector(getArticleRecommendations.selectAll)
  const recommendationArticlesIsLoading = useSelector(getArticleRecommendationsIsLoading)

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticleRecommendations())
  })

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Article not found')}
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button onClick={onBackToList}>
          {t('Go to entities')}
        </Button>
        <ArticleDetails id={id} />
        <Text size={TextSize.L} className={cls.commentTitle} title={t('Recommendation')} />
         <ArticleList
          articles={recommendationArticles}
          isLoading={recommendationArticlesIsLoading}
          className={cls.recommendations}
          target="_blank"
         />
        <Text size={TextSize.L} className={cls.commentTitle} title={t('Comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  )
})
