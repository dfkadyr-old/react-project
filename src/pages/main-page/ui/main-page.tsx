import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { BugButton } from 'app/providers/error-boundary'

export const MainPage = memo((): JSX.Element => {
  const { t } = useTranslation('main')

  return (
    <div>
      <BugButton />
      {t('Main page')}
    </div>
  )
})
