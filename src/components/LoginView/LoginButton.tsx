import React from 'react';
import cx from 'classnames';

import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'styles/LoginView/LoginButton.module.scss';

/* Normal component's props that are to be passed. */
type OwnProps = {
  action: () => void;
};

/* The main button for the login box. */
const LoginButton: React.FC<OwnProps> = ({ action }: OwnProps) => (
  <button
    type='button'
    className={cx(
      cn['Button--uppercased'],
      'btn',
      'btn-primary',
      'form-control'
    )}
    onClick={action}
  >
    Вход
  </button>
);

export default LoginButton;
