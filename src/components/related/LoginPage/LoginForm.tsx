import React from 'react';
import withCSSModule from 'react-css-modules';
import { useTranslation } from 'react-i18next';

import { LoginFormStyles as styles } from 'styles';
import LoginButton from './LoginButton';

/** Normal component's props that are to be passed. */
type OwnProps = {
  doLoginCallback: (username: string, password: string) => void;
};

/** Contraction for KeyboardEvent type. */
type KeyEvent = React.KeyboardEvent<HTMLInputElement>;

/** The form containing auth fields. */
const LoginForm: React.FC<OwnProps> = ({ doLoginCallback }) => {
  const { t: translator } = useTranslation();
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const [areInputsValid, setAreInputsValid] = React.useState(true);

  const login = React.useCallback(() => {
    doLoginCallback(
      usernameRef.current?.value || '',
      passwordRef.current?.value || ''
    );
  }, [usernameRef, passwordRef, doLoginCallback]);

  const checkValidity = React.useCallback(() => {
    return usernameRef.current?.value
      && passwordRef.current?.value
      && usernameRef.current?.value !== ''
      && passwordRef.current?.value !== '';
  }, []);

  const handleKey = React.useCallback((key: KeyEvent) => {
    if (key.charCode === 13) {
      if (checkValidity()) {
        login();
      } else {
        setAreInputsValid(false);
      }
    }
  }, [checkValidity, login, setAreInputsValid]);

  return (
    <form>
      <div className='form-group'>
        <input
          ref={usernameRef}
          type='text'
          className='form-control'
          placeholder={translator('Login')}
          onKeyPress={handleKey}
          styleName={areInputsValid
            ? 'LoginForm__Input--Simple' : 'LoginForm__Input--Error'}
        />
      </div>
      <div className='form-group'>
        <input
          ref={passwordRef}
          type='password'
          className='form-control'
          placeholder={translator('Password')}
          onKeyPress={handleKey}
          styleName={areInputsValid
            ? 'LoginForm__Input--Simple' : 'LoginForm__Input--Error'}
        />
      </div>
      <LoginButton action={login} />
    </form>
  );
};

export default withCSSModule(LoginForm, styles);
