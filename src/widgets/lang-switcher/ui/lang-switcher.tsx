import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/class-names'
import { Button, ThemeButton } from 'shared/ui/button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = (props: LangSwitcherProps): JSX.Element => {
  const { className } = props
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t('LANGUAGE_TITLE')}
    </Button>
  )
}
