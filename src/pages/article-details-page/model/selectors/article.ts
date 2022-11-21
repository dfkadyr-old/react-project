import { createSelector } from '@reduxjs/toolkit'

import { getArticleDetailsData } from 'entities/article'
import { getUserAuthData } from 'entities/user'

export const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (article, user) => {
    if (!article || !user) {
      return false
    }

    return article.user.id === user.id
  }
)
