import React from 'react';
import { compose } from 'redux';
import { useTranslation } from 'react-i18next';

import { withCSSModulePartiallyApplied } from 'misc/hoc';
import styles from 'styles/Header/Header.module.scss';

/** Main header component. */
const Header: React.FC<{}> = () => {
  const { t: translator } = useTranslation();

  return (
    <div styleName='HeaderWrapper'>
      <div styleName='Header__Overlay'>
        <h1 styleName='Header__Title'>
          {translator('Title')}
        </h1>
        <h3 styleName='Header__Text'>
          {translator('Description.1')}
        </h3>
        <p styleName='Header__Text'>
          {translator('Description.2')}
        </p>
      </div>
    </div>
  );
};

/* Use memoizing because the header is independent
   from the outside data. */
export default compose<React.ComponentType<{}>>(
  React.memo,
  withCSSModulePartiallyApplied(styles)
)(Header);
