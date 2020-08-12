import React from 'react';
import cx from 'classnames';
import Navbar from 'components/common/Navbar';
import LoginBoxContainer from 'components/related/LoginPage';

import styles from 'styles/View.module.scss';

const LoginPage: React.FC<{}> = () => (
  <div>
    <div className={cx(
      styles['view-area'],
      styles['view-area--gradient-hot-cold'],
      styles['view-area--full-height']
    )}
    >
      <Navbar />
      <LoginBoxContainer />
    </div>
  </div>
);

export default LoginPage;
