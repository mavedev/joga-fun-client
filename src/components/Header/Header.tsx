import React from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'styles/Header/Header.module.scss';

/* Main header component. */
const Header = () => {
  const { t } = useTranslation();

  return (
    <div className={cn['Header-wrapper']}>
      <div className={cn['Header-wrapper__overlay']}>
        <h1 className={cn['Header-wrapper__title']}>
          {t('Title.1')}
        </h1>
        <h3 className={cn['Header-wrapper__text']}>
          {t('Description.1')}
        </h3>
        <p className={cn['Header-wrapper__text']}>
          {t('Description.2')}
        </p>
      </div>
    </div>
  );
};

export default Header;
