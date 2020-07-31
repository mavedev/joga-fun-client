import React from 'react';

import LoginButton from './LoginButton';

import 'bootstrap/dist/css/bootstrap.min.css';

/* Normal component's props that are to be passed. */
type OwnProps = {
  doLoginCallback: (username: string, password: string) => void;
};

/* The form containing auth fields. */
const LoginForm: React.FC<OwnProps> = ({ doLoginCallback }: OwnProps) => (
  <form>
    <div className='form-group'>
      <input type='text' className='form-control' placeholder='Логин' />
    </div>
    <div className='form-group'>
      <input type='password' className='form-control' placeholder='Пароль' />
    </div>
    <LoginButton action={doLoginCallback} />
  </form>
);

export default LoginForm;
