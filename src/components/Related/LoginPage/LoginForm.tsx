import React from 'react';
import { useTranslation } from 'react-i18next';

import LoginButton from './LoginButton';

import 'bootstrap/dist/css/bootstrap.min.css';

/** Normal component's props that are to be passed. */
type OwnProps = {
  doLoginCallback: (username: string, password: string) => void;
};

/** The form containing auth fields. */
const LoginForm: React.FC<OwnProps> = ({ doLoginCallback }) => {
  const { t: translator } = useTranslation();
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const login = React.useCallback(() => {
    doLoginCallback(
      usernameRef.current?.value || '',
      passwordRef.current?.value || ''
    );
  }, [usernameRef, passwordRef, doLoginCallback]);

  return (
    <form>
      <div className='form-group'>
        <input
          ref={usernameRef}
          type='text'
          className='form-control'
          placeholder={translator('Login')}
        />
      </div>
      <div className='form-group'>
        <input
          ref={passwordRef}
          type='password'
          className='form-control'
          placeholder={translator('Password')}
        />
      </div>
      <LoginButton action={login} />
    </form>
  );
};

export default LoginForm;
