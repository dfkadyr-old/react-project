import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

import { getUserAuthData } from 'entities/user'
import { RoutePath } from 'shared/config/route-config'

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }
  return children
}
