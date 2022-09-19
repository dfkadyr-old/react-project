import React from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/class-names";
import { Button, ThemeButton } from "shared/ui/button";

import cls from './lang-switcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t('LANGUAGE_TITLE')}
    </Button>
  );
};
