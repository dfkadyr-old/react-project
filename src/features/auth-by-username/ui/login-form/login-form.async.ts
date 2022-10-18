import { lazy } from 'react'

export const LoginFormAsync = lazy(async () => await import('./login-form')
  .then(module => ({ default: module.LoginForm })))
