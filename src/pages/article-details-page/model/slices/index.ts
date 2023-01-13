import { combineReducers } from '@reduxjs/toolkit'

import { ArticleDetailsPageSchema } from '../types'

import { articleDetailsCommentsReducer } from './article-details-comments-slice'
import { articleDetailsPageRecommendationsReducer } from './article-details-page-recommendations-slice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: articleDetailsCommentsReducer
})
