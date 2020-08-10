import React from 'react';

import cn from 'styles/Footer/FooterCPPane.module.scss';

/* Copiright info. */
const FooterCPPane: React.FC<{}> = () => (
  <div className={cn['FooterCPPane__copiright-wrapper']}>
    <div className={cn['FooterCPPane__span-wrapper']}>
      <span className='FooterCPPane__copiright'>
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Copiright:
      </span>
    </div>
    <div className={cn['FooterCPPane__span-wrapper']}>
      <span className={cn['FooterCPPane__text--important']}>
        JogaFun
      </span>
    </div>
  </div>
);

export default FooterCPPane;
