import { HTMLAttributes, ReactNode } from 'react'

import { classNames } from 'shared/lib/class-names'

import cls from './card.module.scss'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  theme?: CardTheme
}

export const Card = (props: CardProps) => {
  const { className, children, theme = CardTheme.NORMAL, ...otherProps } = props
  return (
    <div className={classNames(cls.card, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </div>
  )
}
