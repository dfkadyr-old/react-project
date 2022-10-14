import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/class-names'
import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'

import cls from './login-form.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input autoFocus placeholder={t('Enter username')} className={cls.input}/>
      <Input placeholder={t('Enter password')} className={cls.input}/>
      <Button className={cls.loginBtn}>
        {t('Login')}
      </Button>
    </div>
  )
}
