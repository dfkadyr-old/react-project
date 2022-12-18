import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

import { getUserAuthData, UserRole, getUserRoles } from '@/entities/user'
import { RoutePath } from '@/shared/const/router'

interface RequireAuthProps {
  children: JSX.Element
  roles?: UserRole[]
}

export function RequireAuth(props: RequireAuthProps) {
  const { children, roles } = props
  const auth = useSelector(getUserAuthData)
  const location = useLocation()
  const userRoles = useSelector(getUserRoles)

  const hasRequireRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some(requireRole => {
      const hasRole = userRoles?.includes(requireRole)
      return hasRole
    })
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  if (!hasRequireRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
  }

  return children
}
