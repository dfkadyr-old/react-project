import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Page } from 'widgets/page'

export const ForbiddenPage = memo(() => {
  const { t } = useTranslation()

  return (
    <Page>
      {t('ForbiddenPage page')}
    </Page>
  )
})
