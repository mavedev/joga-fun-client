import React from 'react';
import cx from 'classnames';

import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'styles/LoginView/BoxTitle.module.scss';

/* The title for the login box. */
const Title: React.FC<{}> = () => (
  <h3 className={cx('text-center', cn['Box__Title'])}>
    Вход администратора
  </h3>
);

export default Title;
