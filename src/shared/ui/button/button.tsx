import { ButtonHTMLAttributes, ReactNode } from 'react'

import { classNames, Mods } from 'shared/lib/class-names'

import cls from './button.module.scss'

export const enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
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
  disabled?: boolean
  children?: ReactNode
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    theme = ButtonTheme.OUTLINE,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props
  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled
  }

  return (
    <button
      className={classNames(cls.button, mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
}
