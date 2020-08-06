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

/* Use memoizing because the footer is completely
   static, unchangeable and data-independent in itself. */
export default React.memo(Footer);
