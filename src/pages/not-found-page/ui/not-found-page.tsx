import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/class-names'
import { Page } from 'shared/ui/page'

import cls from './not-found-page.module.scss'

export const NotFoundPage = memo((): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Page className={classNames(cls.NotFoundPage, {}, [])}>
      {t('Not found page')}
    </Page>
  )
})
