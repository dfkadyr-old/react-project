import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk'

import { fetchArticlesList } from '../fetch-articles-list'

import { initArticlesPage } from './init-articles-page'

jest.mock('../fetch-articles-list')

describe('initArticlesPage.test', () => {
  test('not inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: true,
        _inited: false
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 })
  })
  test('inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: true,
        _inited: true
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
