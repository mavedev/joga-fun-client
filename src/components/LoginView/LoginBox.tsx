import React from 'react';
import cx from 'classnames';

import cn from 'styles/LoginBox.module.scss';

type OwnProps = {
  doLoginCallback: (username: string, password: string) => void;
}

const LoginBox = ({ doLoginCallback }: OwnProps) => (
  <div className='login-box'>
    {/* Additional wrapper for paddings. */}
    <div className={cn['box-wrapper']}>
      {/* The main container. */}
      {/* Third-party classes: container, jumbotron. */}
      <div className={cx(
        cn['login-box__content'],
        'container',
        'jumbotron'
      )}
      >
        {/* The title. */}
        <h3 className={cx('text-center', cn['login-box__title'])}>
          Вход администратора
        </h3>
        {/* The login form. */}
        <form>
          {/* Third=party classes: form-group. */}
          <div className='form-group'>
            {/* Third=party classes: form-control. */}
            <input type='text' className='form-control' placeholder='Логин' />
          </div>
          {/* Third=party classes: form-group. */}
          <div className='form-group'>
            {/* Third=party classes: form-control. */}
            <input type='password' className='form-control' placeholder='Пароль' />
          </div>
          {/* The submit button. */}
          {/* Third=party classes: btn, btn-primary, form-control. */}
          <button
            type='submit'
            className={cx(
              cn['btn--uppercased'],
              'btn',
              'btn-primary',
              'form-control'
            )}
          >
            Вход
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default LoginBox;
