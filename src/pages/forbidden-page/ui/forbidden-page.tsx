import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/page'

export const ForbiddenPage = memo(() => {
  const { t } = useTranslation()

  return <Page dataTestId="ForbiddenPage">{t('ForbiddenPage page')}</Page>
})
