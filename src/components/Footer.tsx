import React from 'react';
import 'styles/Footer.scss';

const Footer = () => (
  <div className='footer-wrapper'>
    <div className='footer-wrapper__main'>
      <p>MainF</p>
    </div>
    <div className='footer-wrapper__copiright-wrapper'>
      <span className='footer-wrapper__copiright'>
        &copy; 2020 Copiright:
      </span>
      <span className='footer-wrapper__text-important'>
        JogaFun
      </span>
    </div>
  </div>
);

export default Footer;
