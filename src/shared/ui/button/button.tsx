import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/class-names';

import cls from './button.module.scss';


export const enum ThemeButton{
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {children, className, theme, ...otherProps} = props;
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
