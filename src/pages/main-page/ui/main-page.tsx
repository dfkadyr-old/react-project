import { useTranslation } from 'react-i18next'

export const MainPage = (): JSX.Element => {
  const { t } = useTranslation('main')

  return (
    <div>
      {t('MAIN_PAGE_TITLE')}
    </div>
  )
}
