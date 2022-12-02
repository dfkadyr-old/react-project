export type UserRole = ValueOf<typeof UserRole>
export const UserRole = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  MANAGER: 'MANAGER'
} as const

export interface User {
  id: string
  username: string
  avatar?: string
  roles?: UserRole[]
}

export interface UserSchema {
  authData?: User

  _inited: boolean
}
