import React from 'react';
import { compose } from 'redux';

import { FooterStyles as styles } from 'styles';
import { withCSSModulePartiallyApplied } from 'misc/hoc';
import FooterTopPane from './FooterTopPane';
import FooterCPPane from './FooterCPPane';

/** The footer. */
const Footer: React.FC<{}> = () => (
  <div styleName='Footer__MainWrapper'>
    <FooterTopPane />
    <FooterCPPane />
  </div>
);

/* Use memoizing because the footer is independent
   from the outside data. */
export default compose<React.ComponentType<{}>>(
  React.memo,
  withCSSModulePartiallyApplied(styles)
)(Footer);
