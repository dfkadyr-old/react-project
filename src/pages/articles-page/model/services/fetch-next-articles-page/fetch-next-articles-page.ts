import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from 'app/providers/store-provider'

import {
  getArticlesPageHasMore, getArticlesPageIsLoading,
  getArticlesPageNum
} from '../../selectors/articles-page-selectors'
import { articlesPageActions } from '../../slices/article-page-slice'
import { fetchArticlesList } from '../fetch-articles-list'

export const fetchNextArticlesPage = createAsyncThunk<
void, void,
ThunkConfig<string>
>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const hasMore = getArticlesPageHasMore(getState())
    const page = getArticlesPageNum(getState())
    const isLoading = getArticlesPageIsLoading(getState())

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1))
      dispatch(fetchArticlesList({
        page: page + 1
      }))
    }
  }
)
