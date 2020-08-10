import React from 'react';
import { useTranslation } from 'react-i18next';
import withCSSModuleApplied from 'react-css-modules';

import * as constants from 'invariants';
import styles from 'styles/Common/Footer/FooterTopPane.module.scss';

/** The main block with info. */
const FooterTopPane: React.FC<{}> = () => {
  const { t: translator } = useTranslation();

  return (
    <div styleName='FooterTopPane__MainWrapper'>
      <div styleName='FooterTopPane__Card--Important'>
        {constants.NAME_SITE}
      </div>
      <div styleName='FooterTopPane__Card--Simple'>
        {`${translator('Feedback')}: ${process.env.REACT_APP_EMAIL}`}
      </div>
    </div>
  );
};

export default withCSSModuleApplied(FooterTopPane, styles);
