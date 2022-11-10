import { HTMLAttributes, ReactNode } from 'react'

import { classNames } from 'shared/lib/class-names'

import cls from './card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export const Card = (props: CardProps) => {
  const { className, children, ...otherProps } = props
  return (
    <div className={classNames(cls.card, {}, [className])} {...otherProps}>
      {children}
    </div>
  )
}
