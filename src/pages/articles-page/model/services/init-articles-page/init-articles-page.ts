import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/store-provider'
import { ArticleSortField, ArticleType } from '@/entities/article'
import { SortOrder } from '@/shared/types/sort'

import { getArticlesPageInited } from '../../selectors/articles-page-selectors'
import { articlesPageActions } from '../../slices/article-page-slice'
import { fetchArticlesList } from '../fetch-articles-list'

export const initArticlesPage = createAsyncThunk<
void, URLSearchParams,
ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const isInited = getArticlesPageInited(getState())

    if (!isInited) {
      const orderFromUrl = searchParams.get('order') as SortOrder
      const sortFromUrl = searchParams.get('sort') as ArticleSortField
      const searchFromUrl = searchParams.get('search')
      const typeFromUrl = searchParams.get('type') as ArticleType

      if (orderFromUrl) {
        dispatch(articlesPageActions.setOrder(orderFromUrl))
      }
      if (sortFromUrl) {
        dispatch(articlesPageActions.setSort(sortFromUrl))
      }
      if (searchFromUrl) {
        dispatch(articlesPageActions.setSearch(searchFromUrl))
      }
      if (typeFromUrl) {
        dispatch(articlesPageActions.setType(typeFromUrl))
      }

      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList({}))
    }
  }
)
