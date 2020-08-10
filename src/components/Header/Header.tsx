import React from 'react';
import { compose } from 'redux';
import withSCSSModule from 'react-css-modules';
import { useTranslation } from 'react-i18next';

import cn from 'styles/Header/Header.module.scss';

/** Main header component. */
const Header: React.FC<{}> = () => {
  const { t: translator } = useTranslation();

  return (
    <div styleName='Header-wrapper'>
      <div styleName='Header-wrapper__overlay'>
        <h1 styleName='Header-wrapper__title'>
          {translator('Title')}
        </h1>
        <h3 styleName='Header-wrapper__text'>
          {translator('Description.1')}
        </h3>
        <p styleName='Header-wrapper__text'>
          {translator('Description.2')}
        </p>
      </div>
    </div>
  );
};

/* Use memoizing because the header is independent
   from the outside data. */
export default compose(

)();

React.memo(withSCSSModule(Header, cn));
