import { memo } from 'react'
import { useTranslation } from 'react-i18next'

export const AboutPage = memo((): JSX.Element => {
  const { t } = useTranslation('about')

  return (
    <div>
      {t('About page')}
    </div>
  )
})
