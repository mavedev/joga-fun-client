import React from 'react';
import cx from 'classnames';

import cn from 'styles/Footer/FooterTopPane.module.scss';

/* The main block with info. */
const FooterTopPane: React.FC<{}> = () => (
  <div className={cn['FooterWrapper--main']}>
    <div className={cx(
      cn['FooterWrapper__card'],
      cn['FooterWrapper__card--important']
    )}
    >
      JogaFun
    </div>
    <div className={cx(
      cn['FooterWrapper__card'],
      cn['FooterWrapper__card--with-contacts']
    )}
    >
      Связаться: [почта]
    </div>
  </div>
);

export default FooterTopPane;
