import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from '@/shared/ui/text'
import { Page } from '@/widgets/page'

export const MainPage = memo((): JSX.Element => {
  const { t } = useTranslation('main')

  return (
    <Page>
      <Text titleTag='h1' title={t('Main page')} />
    </Page>
  )
})
