import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/class-names'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/dynamic-module-loader'
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch'
import { Button, ButtonTheme } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Text, TextTheme } from '@/shared/ui/text'

import { getLoginError } from '../../model/selectors/get-login-error'
import { getLoginIsLoading } from '../../model/selectors/get-login-is-loading'
import { getLoginPassword } from '../../model/selectors/get-login-password'
import { getLoginUsername } from '../../model/selectors/get-login-username'
import { loginByUsername } from '../../model/services/login-by-user-name'
import { loginActions, loginReducer } from '../../model/slice/login-slice'

import cls from './login-form.module.scss'

interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className, onSuccess } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, onSuccess, password, username])

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.loginForm, {}, [className])}>
        <Text title={t('Authorization Form')} />
        {error && <Text text={t('Incorrect username or password')} theme={TextTheme.ERROR} />}
        <Input
          onChange={onChangeUsername}
          autoFocus
          placeholder={t('Enter username')}
          className={cls.input}
          value={username}
        />
        <Input onChange={onChangePassword} placeholder={t('Enter password')} className={cls.input} value={password} />
        <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
          {t('Login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})
