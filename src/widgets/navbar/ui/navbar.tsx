import { classNames } from 'shared/lib/class-names'
import { AppLink, AppLinkTheme } from 'shared/ui/app-link'

import cls from './navbar.module.scss'
import { RoutePath } from 'shared/config/route-config'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps): JSX.Element => {
  const { className } = props
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
          {t('Home')}
        </AppLink>
        <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
          {t('About')}
        </AppLink>
      </div>
    </div>
  )
}
