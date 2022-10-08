import { useTranslation } from 'react-i18next'

import { Counter } from 'entities/counter'

export const AboutPage = (): JSX.Element => {
  const { t } = useTranslation('about')

  return (
    <div>
      {t('About page')}
      <Counter />
    </div>
  )
}
