import { Theme, useTheme } from 'app/providers/theme-provider';
import { Button, ThemeButton } from 'shared/ui/button';
import { classNames } from 'shared/lib/class-names';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import cls from './theme-switcher.module.scss';


interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
