import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { ArticleDetails } from 'entities/article'
import { CommentList } from 'entities/comment'
import { AddCommentForm } from 'features/add-comment-form'
import { RoutePath } from 'shared/config/route-config'
import { classNames } from 'shared/lib/class-names'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader'
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch'
import { useInitialEffect } from 'shared/lib/hooks/use-initial-effect'
import { Button } from 'shared/ui/button'
import { Text } from 'shared/ui/text'

import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../model/services/add-comment-for-article'
import { fetchCommentsByArticleId } from '../../model/services/fetch-comments-by-article-id'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/article-details-comments-slice'

import cls from './article-details-page.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

export const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleCommentsIsLoading)

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Article not found')}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button onClick={onBackToList}>
          {t('Go to entities')}
        </Button>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('Comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={isLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  )
})
