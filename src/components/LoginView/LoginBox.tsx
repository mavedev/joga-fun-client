import React from 'react';
import cx from 'classnames';

import styles from 'styles/LoginBox.module.scss';

const LoginBox = () => (
  <div className='login-box'>
    {/* Additional wrapper for paddings. */}
    <div className={styles['box-wrapper']}>
      {/* The main container. */}
      {/* Third-party classes: container, jumbotron. */}
      <div className={cx(
        styles['login-box__content'],
        'container',
        'jumbotron'
      )}
      >
        {/* The title. */}
        <h3 className={cx('text-center', styles['login-box__title'])}>
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
              styles['btn--uppercased'],
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
