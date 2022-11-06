import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from 'app/providers/store-provider'
import { CommentProps } from 'entities/comment'

export const fetchCommentsByArticleId = createAsyncThunk<
CommentProps[],
string | undefined,
ThunkConfig<string>
>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    if (!articleId) {
      return rejectWithValue('error')
    }

    try {
      const response = await extra.api.get<CommentProps[]>('/comments', {
        params: {
          articleId,
          _expand: 'user'
        }
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
