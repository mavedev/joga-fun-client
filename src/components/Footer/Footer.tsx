import React from 'react';

import cn from 'styles/Footer/Footer.module.scss';
import FooterTopPane from './FooterTopPane';
import FooterCPPane from './FooterCPPane';

/* The footer. */
const Footer: React.FC<{}> = () => (
  <div className={cn['MainWrapper']}>
    <FooterTopPane />
    <FooterCPPane />
  </div>
);

export default React.memo(Footer);
