import React from 'react';
import withCSSModule from 'react-css-modules';
import { useTranslation } from 'react-i18next';

import { BoxTitleStyles as styles } from 'styles';

/** The title for the login box. */
const Title: React.FC<{}> = () => {
  const { t: translator } = useTranslation();

  return (
    <h3 className='text-center' styleName='Title__Text'>
      {translator('AdminEntrance')}
    </h3>
  );
};

export default withCSSModule(Title, styles);
