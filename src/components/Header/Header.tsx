import React from 'react';

import getText from 'translations';
import styles from 'styles/Header/Header.module.scss';

const Header = () => (
  <div className={styles['header-wrapper']}>
    <div className={styles['header-wrapper__overlay']}>
      <h1 className={styles['header-wrapper__title']}>
        {getText('headerTitle')}
      </h1>
      <h3 className={styles['header-wrapper__text']}>[Описание]</h3>
      <p className={styles['header-wrapper__text']}>[Развёрнутое описание]</p>
    </div>
  </div>
);

export default Header;
