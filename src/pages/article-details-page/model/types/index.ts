import { ArticleDetailsCommentsSchema } from './article-details-comments-schema'
import {
  ArticleDetailsRecommendationsSchema
} from './article-details-recommendations-schema'

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema
  recommendations: ArticleDetailsRecommendationsSchema
}
