import { classNames } from 'shared/lib/class-names'

import cls from './page-error.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/button'

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
      <Button onClick={reloadPage}>
        {t('Refresh page')}
      </Button>
    </div>
  )
}
