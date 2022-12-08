import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { AUTH_USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(AUTH_USER_LOCALSTORAGE_KEY) || ''
      if (token) {
        headers.set('Authorization', token)
      }
      return headers
    }
  }),
  endpoints: (_builder) => ({})
})
