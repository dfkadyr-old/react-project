import { EntityState } from '@reduxjs/toolkit'

import { CommentProps } from '@/entities/comment'

export interface ArticleDetailsCommentsSchema extends EntityState<CommentProps> {
  isLoading?: boolean
  error?: string
}
