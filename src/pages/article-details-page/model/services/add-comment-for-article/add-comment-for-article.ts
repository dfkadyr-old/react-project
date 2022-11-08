import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from 'app/providers/store-provider'
import { getArticleDetailsData } from 'entities/article/model/selectors/article-details'
import { CommentProps } from 'entities/comment'
import { getUserAuthData } from 'entities/user'

import { fetchCommentsByArticleId } from '../../services/fetch-comments-by-article-id'

export const addCommentForArticle =
  createAsyncThunk<CommentProps, string, ThunkConfig<string>>(
    'articleDetails/getAddCommentFormText',
    async (text, thunkAPI) => {
      const { extra, dispatch, rejectWithValue, getState } = thunkAPI

      const userData = getUserAuthData(getState())
      const article = getArticleDetailsData(getState())

      if (!userData || !text || !article) {
        return rejectWithValue('no data')
      }

      try {
        const response = await extra.api.post<CommentProps>('/comments', {
          articleId: article?.id,
          userId: userData?.id,
          text
        })

        if (!response.data) {
          throw new Error()
        }

        dispatch(fetchCommentsByArticleId(article.id))

        return response.data
      } catch (e) {
        console.error(e)
        return rejectWithValue('Incorrect username or password')
      }
    }
  )
