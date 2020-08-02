import React from 'react';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';

import * as constants from 'appConstants';

import cn from 'styles/Footer/FooterTopPane.module.scss';

/* The main block with info. */
const FooterTopPane: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <div className={cn['FooterWrapper--main']}>
      <div className={cx(
        cn['FooterWrapper__card'],
        cn['FooterWrapper__card--important']
      )}
      >
        {constants.NAME_SITE}
      </div>
      <div className={cx(
        cn['FooterWrapper__card'],
        cn['FooterWrapper__card--with-contacts']
      )}
      >
        {t('Feedback')}
        {': '}
        {process.env.REACT_APP_EMAIL}
      </div>
    </div>
  );
};

export default FooterTopPane;
