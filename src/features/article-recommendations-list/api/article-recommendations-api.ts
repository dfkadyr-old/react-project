import { Article } from '@/entities/article'
import { rtkApi } from '@/shared/api'

const recommendationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticlesRecommendationsList: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      })
    })
  })
})

export const useArticlesRecommendationsList = recommendationApi.useGetArticlesRecommendationsListQuery
