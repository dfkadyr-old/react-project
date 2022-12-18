import { RouteProps } from 'react-router-dom'

import { UserRole } from '@/entities/user'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}
