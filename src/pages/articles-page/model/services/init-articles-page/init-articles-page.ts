import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from 'app/providers/store-provider'

import { getArticlesPageInited } from '../../selectors/articles-page-selectors'
import { articlesPageActions } from '../../slices/article-page-slice'
import { fetchArticlesList } from '../fetch-articles-list'

export const initArticlesPage = createAsyncThunk<
void, void,
ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const isInited = getArticlesPageInited(getState())

    if (!isInited) {
      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList({
        page: 1
      }))
    }
  }
)
