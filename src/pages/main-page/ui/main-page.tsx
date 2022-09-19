import React from 'react';
import { useTranslation } from "react-i18next";

export const MainPage = () => {
  const {t} = useTranslation('main');

  return (
    <div>
      {t('MAIN_PAGE_TITLE')}
    </div>
  );
};
