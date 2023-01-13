import { lazy, Suspense } from 'react'

import { Skeleton } from '@/shared/ui/skeleton'

import { ArticleRatingProps } from './article-rating'

const ArticleRatingLazy = lazy(
  async () => await import('./article-rating').then((module) => ({ default: module.ArticleRating }))
)

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  )
}
