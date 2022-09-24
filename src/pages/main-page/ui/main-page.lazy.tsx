import { lazy } from 'react'

export const MainPageLazy = lazy(async () => await import('./main-page').then(module => ({ default: module.MainPage })))
