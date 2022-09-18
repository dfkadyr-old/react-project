import { classNames } from "shared/lib/class-names";
import { Index, AppLinkTheme } from "shared/ui/app-link";

import cls from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Index to={'/'} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Home</Index>
        <Index to={'/about'} theme={AppLinkTheme.SECONDARY}>About</Index>
      </div>
    </div>
  );
};
