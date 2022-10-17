import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { classNames } from 'shared/lib/class-names'
import { Button, ButtonTheme } from 'shared/ui/button'
import { Input } from 'shared/ui/input'
import { Text, TextTheme } from 'shared/ui/text'

import { getLoginState } from '../../model/selectors/get-login-state'
import { loginByUsername } from '../../model/services/login-by-user-name'
import { loginActions } from '../../model/slice/login-slice'

import cls from './login-form.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const {
    username, password, isLoading, error
  } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUserName(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPasswordName(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    // @ts-expect-error
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t('Authorization Form') } />
      {error && <Text text={t('Incorrect username or password')} theme={TextTheme.ERROR} />}
      <Input
        onChange={onChangeUsername}
        autoFocus
        placeholder={t('Enter username')}
        className={cls.input}
        value={username}
      />
      <Input
        onChange={onChangePassword}
        placeholder={t('Enter password')}
        className={cls.input}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Login')}
      </Button>
    </div>
  )
})
