import { HTMLAttributeAnchorTarget, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { classNames } from 'shared/lib/class-names'

import cls from './app-link.module.scss'

export const enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  children: ReactNode
  target?: HTMLAttributeAnchorTarget
}

export const AppLink = (props: AppLinkProps) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
