import { lazy } from 'react'

export const ArticleEditPageLazy = lazy(
  async () => await import('./article-edit-page').then((module) => ({ default: module.ArticleEditPage }))
)
