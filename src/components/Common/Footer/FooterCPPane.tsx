import React from 'react';
import withCSSModuleApplied from 'react-css-modules';

import * as constants from 'invariants';
import styles from 'styles/Common/Footer/FooterCPPane.module.scss';

/** Copiright info. */
const FooterCPPane: React.FC<{}> = () => (
  <div styleName='FooterCPPane__CopirightWrapper'>
    <div styleName='FooterCPPane__SpanWrapper'>
      <span>{`© ${new Date().getFullYear()} Copiright:`}</span>
    </div>
    <div styleName='FooterCPPane__SpanWrapper'>
      <span styleName='FooterCPPane__Text--Important'>
        {constants.NAME_SITE}
      </span>
    </div>
  </div>
);

export default withCSSModuleApplied(FooterCPPane, styles);
