import { RouteProps } from 'react-router-dom'

// eslint-disable-next-line dfkadyr-plugin/layer-imports
import { UserRole } from '@/entities/user'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}
