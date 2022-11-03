import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from 'app/providers/store-provider'

import { Article } from '../../types/article'

export const fetchArticleById =
  createAsyncThunk<Article, string, ThunkConfig<string>>(
    'article/fetchArticleById',
    async (articleId, thunkAPI) => {
      const { extra, rejectWithValue } = thunkAPI
      try {
        const response = await extra.api.get<Article>(`/articles/${articleId}`)

        if (!response.data) {
          throw new Error()
        }

        return response.data
      } catch (e) {
        console.error(e)
        return rejectWithValue('Error to get article by id')
      }
    }
  )
