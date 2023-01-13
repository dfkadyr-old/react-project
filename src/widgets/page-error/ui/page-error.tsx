import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/class-names'
import { Button } from '@/shared/ui/button'

import cls from './page-error.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Something went wrong')}</p>
      <Button onClick={reloadPage}>{t('Refresh page')}</Button>
    </div>
  )
}
