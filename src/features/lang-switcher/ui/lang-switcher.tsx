import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/class-names'
import { Button, ButtonTheme } from '@/shared/ui/button'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = memo((props: LangSwitcherProps): JSX.Element => {
  const { className, short } = props
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button className={classNames('', {}, [className])} theme={ButtonTheme.CLEAR} onClick={toggle}>
      {t(short ? 'En' : 'English')}
    </Button>
  )
})
