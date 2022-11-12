import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { BugButton } from 'app/providers/error-boundary'
import { Page } from 'shared/ui/page'

export const MainPage = memo((): JSX.Element => {
  const { t } = useTranslation('main')

  return (
    <Page>
      <BugButton />
      {t('Main page')}
    </Page>
  )
})
