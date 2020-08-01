import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'styles/Header/Header.module.scss';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['header-wrapper']}>
      <div className={styles['header-wrapper__overlay']}>
        <h1 className={styles['header-wrapper__title']}>
          {t('Title.1')}
        </h1>
        <h3 className={styles['header-wrapper__text']}>
          {t('Description.1')}
        </h3>
        <p className={styles['header-wrapper__text']}>
          {t('Description.2')}
        </p>
      </div>
    </div>
  );
};

export default Header;
