import React from 'react';
import cx from 'classnames';

import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'styles/LoginView/LoginBox.module.scss';
import LoginForm from './LoginForm';
import BoxTitle from './BoxTitle';

/* Normal component's props that are to be passed. */
type OwnProps = {
  doLoginCallback: (username: string, password: string) => void;
};

/* Main presentational component. */
const LoginBox: React.FC<OwnProps> = ({ doLoginCallback }: OwnProps) => {
  return (
    <div className='login-box'>
      <div className={cn['BoxWrapper']}>
        <div className={cx('container', 'jumbotron')}>
          <BoxTitle />
          <LoginForm doLoginCallback={doLoginCallback} />
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
