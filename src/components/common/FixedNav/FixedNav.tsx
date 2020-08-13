import React from 'react';
import withCSSModule from 'react-css-modules';

import { FixedNav as styles } from 'styles';

import arrow from 'assets/images/arrow-min.png';

/** Normal component props */
type OwnProps = { scrollAction: () => void; };

/** FIxed navigation panel. */
const FixedNav: React.FC<OwnProps> = ({ scrollAction }) => (
  <button
    type='button'
    styleName='FixedNav__MainWrapper'
    onClick={scrollAction}
  >
    <img styleName='FixedNav__Arrow' src={arrow} alt='^' />
  </button>
);

export default withCSSModule(FixedNav, styles);
