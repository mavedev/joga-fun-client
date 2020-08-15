import React from 'react';
import withCSSModule from 'react-css-modules';
import { useTranslation } from 'react-i18next';

import { NotFoundPageStyles as styles } from 'styles';
import Navbar from 'components/common/Navbar';

const NotFoundPage: React.FC<{}> = () => {
  const { t: translator } = useTranslation();

  return (
    <div styleName='NotFoundPage__MainWrapper--FullHeight'>
      <Navbar />
      <div styleName='NotFoundPage__ContentWrapper'>
        <p>{translator('NoPageFound')}</p>
      </div>
    </div>
  );
};

export default withCSSModule(NotFoundPage, styles);
