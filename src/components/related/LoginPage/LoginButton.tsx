import React from 'react';
import withCSSModule from 'react-css-modules';
import { useTranslation } from 'react-i18next';

import { LoginButtonStyles as styles } from 'styles';

/** Normal component's props that are to be passed. */
type OwnProps = { action: () => void; };

/** The main button for the login box. */
const LoginButton: React.FC<OwnProps> = ({ action }) => {
  const { t: translator } = useTranslation();

  return (
    <button
      type='button'
      className='btn btn-primary form-control'
      styleName='LoginButton--Uppercased'
      onClick={action}
    >
      {translator('Entrance')}
    </button>
  );
};

export default withCSSModule(LoginButton, styles);
