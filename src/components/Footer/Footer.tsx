import React from 'react';
import cx from 'classnames';

import styles from 'styles/Footer/Footer.module.scss';

const Footer = () => (
  <div className={styles['footer-wrapper']}>
    {/* The main block with info. */}
    <div className={styles['footer-wrapper__main']}>
      <div className={cx(
        styles['footer-wrapper__card'],
        styles['footer-wrapper__card--important']
      )}
      >
        JogaFun
      </div>
      <div className={cx(
        styles['footer-wrapper__card'],
        styles['footer-wrapper__card_contacts']
      )}
      >
        Связаться: [почта]
      </div>
    </div>
    {/* Copiright info. */}
    <div className={styles['footer-wrapper__copiright-wrapper']}>
      <div className={styles['footer-wrapper__span-wrapper']}>
        <span className={styles['footer-wrapper__copiright']}>
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          Copiright:
        </span>
      </div>
      <div className={styles['footer-wrapper__span-wrapper']}>
        <span className={styles['footer-wrapper__text--important']}>
          JogaFun
        </span>
      </div>
    </div>
  </div>
);

export default Footer;
