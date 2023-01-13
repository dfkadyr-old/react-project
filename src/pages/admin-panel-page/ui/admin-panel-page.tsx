import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/page'

export const AdminPanelPage = memo(() => {
  const { t } = useTranslation()

  return <Page dataTestId="AdminPanelPage">{t('AdminPanelPage page')}</Page>
})
