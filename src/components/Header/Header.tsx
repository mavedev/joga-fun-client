import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'styles/Header/Header.module.scss';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['header-wrapper']}>
      <div className={styles['header-wrapper__overlay']}>
        <h1 className={styles['header-wrapper__title']}>
          {t('World of joga.1')}
        </h1>
        <h3 className={styles['header-wrapper__text']}>[Описание]</h3>
        <p className={styles['header-wrapper__text']}>[Развёрнутое описание]</p>
      </div>
    </div>
  );
};

export default Header;
