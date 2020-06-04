import React from 'react';
import 'styles/Footer.scss';

const Footer = () => (
  <div className='footer-wrapper'>
    {/* The main block with info. */}
    <div className='footer-wrapper__main'>
      <div className='footer-wrapper__card footer-wrapper__card_important'>
        JogaFun
      </div>
      <div className='footer-wrapper__card footer-wrapper__card_contacts'>
        Связаться: [почта]
      </div>
    </div>
    {/* Copiright info. */}
    <div className='footer-wrapper__copiright-wrapper'>
      <div className='footer-wrapper__span-wrapper'>
        <span className='footer-wrapper__copiright'>
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          Copiright:
        </span>
      </div>
      <div className='footer-wrapper__span-wrapper'>
        <span className='footer-wrapper__text-important'>
          JogaFun
        </span>
      </div>
    </div>
  </div>
);

export default Footer;
