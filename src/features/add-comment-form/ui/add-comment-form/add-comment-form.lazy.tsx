import { FC, lazy } from 'react'

import { AddCommentFormProps } from './add-comment-form'

export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(
  async () => await import('./add-comment-form').then((module) => ({ default: module.AddCommentForm }))
)
