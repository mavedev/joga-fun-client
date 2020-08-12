import React from 'react';
import withCSSModule from 'react-css-modules';

import { LoginPageStyles as styles } from 'styles';
import Navbar from 'components/common/Navbar';
import LoginBoxContainer from 'components/related/LoginPage';

/** A page where the administrator can login. */
const LoginPage: React.FC<{}> = () => (
  <div>
    <div styleName='LoginPage__MainWrapper--FullHeight'>
      <Navbar />
      <LoginBoxContainer />
    </div>
  </div>
);

export default withCSSModule(LoginPage, styles);
