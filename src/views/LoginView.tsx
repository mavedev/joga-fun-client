import React from 'react';
import cx from 'classnames';
import Navbar from 'components/Navbar';
import LoginBox from 'components/LoginBox';

import styles from 'styles/View.module.scss';

const LoginView = () => (
  <div className={styles['page-wrapper']}>
    <div className={cx(
      styles['view-area'],
      styles['view-area--gradient-hot-cold'],
      styles['view-area--full-height']
    )}
    >
      <Navbar />
      <LoginBox />
    </div>
  </div>
);

export default LoginView;
