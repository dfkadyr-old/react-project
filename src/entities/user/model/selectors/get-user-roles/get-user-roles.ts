import { createSelector } from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/store-provider'

import { UserRole } from '../../const'

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles

export const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)))
export const isUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)))
export const isRoleUser = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.USER)))
