import { lazy } from 'react'

export const AboutPageLazy = lazy(async () => await import('./about-page').then(module => ({ default: module.AboutPage })))
