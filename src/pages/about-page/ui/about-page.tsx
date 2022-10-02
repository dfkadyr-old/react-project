import { useTranslation } from 'react-i18next'

export const AboutPage = (): JSX.Element => {
  const { t } = useTranslation('about')

  return (
    <div>
      {t('About page')}
    </div>
  )
}
