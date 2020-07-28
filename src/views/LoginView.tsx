import React from 'react';
import cx from 'classnames';
import Navbar from 'components/Navbar';
import LoginContainer from 'components/LoginView/LoginContainer';

import styles from 'styles/View.module.scss';

const LoginView = () => (
  <div>
    <div className={cx(
      styles['view-area'],
      styles['view-area--gradient-hot-cold'],
      styles['view-area--full-height']
    )}
    >
      <Navbar />
      <LoginContainer />
    </div>
  </div>
);

export default LoginView;
