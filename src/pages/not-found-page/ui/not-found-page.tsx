import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/class-names'

import cls from './not-found-page.module.scss'

export const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.NotFoundPage, {}, [])}>
      {t('NOT_FOUND_PAGE_TITLE')}
    </div>
  )
}
