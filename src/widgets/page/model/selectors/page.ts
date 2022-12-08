import { createSelector } from '@reduxjs/toolkit'

import { StateSchema } from '@/app/providers/store-provider'

export const getPageScroll = (state: StateSchema) => state.page.scroll

export const getPageScrollByPath = createSelector(
  getPageScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
)
