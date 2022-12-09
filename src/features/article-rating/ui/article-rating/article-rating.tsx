import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { RatingCard } from '@/entities/rating'
import { getUserAuthData } from '@/entities/user'
import { Skeleton } from '@/shared/ui/skeleton'

import { useGetArticleRating, useRateArticle } from '../../api/article-rating-api'

export interface ArticleRatingProps {
  className?: string
  articleId: string
}

export const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props
  const { t } = useTranslation()
  const userData = useSelector(getUserAuthData)

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? ''
  })
  const [rateArticleMutation] = useRateArticle()
  const rating = data?.[0]

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: userData?.id ?? '',
        articleId,
        rate: starsCount,
        feedback
      })
    } catch (e) {
      // handle error
      console.error(e)
    }
  }, [articleId, rateArticleMutation, userData?.id])

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback)
  }, [handleRateArticle])

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount)
  }, [handleRateArticle])

  if (isLoading) {
    return <Skeleton width="100%" height={120} />
  }

  return (
    <RatingCard
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
      className={className}
      title={t('Rate the article')}
      feedbackTitle={t('Leave your feedback about the article, it will help improve the quality')}
      hasFeedback
    />
  )
})
