import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { CommentList } from '@/entities/comment'
import { AddCommentForm } from '@/features/add-comment-form'
import { classNames } from '@/shared/lib/class-names'
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch'
import { useInitialEffect } from '@/shared/lib/hooks/use-initial-effect'
import { VStack } from '@/shared/ui/stack'
import { Text, TextSize } from '@/shared/ui/text'

import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../model/services/add-comment-for-article'
import { fetchCommentsByArticleId } from '../../model/services/fetch-comments-by-article-id'
import { getArticleComments } from '../../model/slices/article-details-comments-slice'

interface ArticleDetailsPageCommentsProps {
  className?: string
  id: string
}

export const ArticleDetailsPageComments = memo((props: ArticleDetailsPageCommentsProps) => {
  const { className, id } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      <Text size={TextSize.L} title={t('Comments')} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </VStack>
  )
})
