import { lazy } from 'react'

export const ArticleDetailsPageLazy = lazy(
  async () => await import('./article-details-page').then((module) => ({ default: module.ArticleDetailsPage }))
)
