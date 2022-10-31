import { lazy } from 'react'

export const ArticlesPageLazy = lazy(async () => await import('./articles-page')
  .then(module => ({ default: module.ArticlesPage })))
