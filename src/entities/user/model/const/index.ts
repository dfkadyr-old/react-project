export type UserRole = ValueOf<typeof UserRole>
export const UserRole = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  MANAGER: 'MANAGER'
} as const
