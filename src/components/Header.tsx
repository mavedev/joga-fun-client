import React from 'react';
import 'styles/Header.scss';

const Header = () => (
  <div className='header-wrapper'>
    <div className='header-wrapper__overlay'>
      <h1 className='header-wrapper__title'>Мир йоги</h1>
      <h3 className='header-wrapper__text'>[Описание]</h3>
      <p className='header-wrapper__text'>[Развёрнутое описание]</p>
    </div>
  </div>
);

export default Header;
