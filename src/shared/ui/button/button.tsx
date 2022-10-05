import { ButtonHTMLAttributes, FC } from 'react'

import { classNames } from 'shared/lib/class-names'

import cls from './button.module.scss'

export const enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, theme, square, size = ButtonSize.M, ...otherProps } = props
  const mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true
  }

  return (
    <button
      className={classNames(cls.button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
