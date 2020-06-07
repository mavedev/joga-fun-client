import React from 'react';

import 'styles/LoginBox.scss';

const LoginBox = () => (
  <div className='filler'>
    <div className='container col-lg-4'>
      <div className='jumbotron'>
        <h3 className='text-center'>Вход администратора</h3>
        <form>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Логин' />
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' placeholder='Пароль' />
          </div>
          <button type='submit' className='btn btn-primary form-control'>Вход</button>
        </form>
      </div>
    </div>
  </div>
);

export default LoginBox;
