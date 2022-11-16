import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Page } from 'widgets/page'

export const AboutPage = memo((): JSX.Element => {
  const { t } = useTranslation('about')

  return (
    <Page>
      {t('About page')}
    </Page>
  )
})
