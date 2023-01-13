import { lazy } from 'react'

export const AdminPanelPageLazy = lazy(
  async () => await import('./admin-panel-page').then((module) => ({ default: module.AdminPanelPage }))
)
