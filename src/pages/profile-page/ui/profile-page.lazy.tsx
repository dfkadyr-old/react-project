import { lazy } from 'react'

export const ProfilePageLazy = lazy(async () => await import('./profile-page').then(module =>
  ({ default: module.ProfilePage })))
