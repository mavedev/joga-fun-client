import React from 'react';
import withCSSModule from 'react-css-modules';

import { LoginBoxStyles as styles } from 'styles';
import LoginFormContainer from './LoginFormContainer';
import BoxTitle from './BoxTitle';

/** Normal component's props that are to be passed. */
type OwnProps = {
  doLoginCallback: (username: string, password: string) => void;
};

/** Main presentational component. */
const LoginBox: React.FC<OwnProps> = ({ doLoginCallback }) => {
  return (
    <div className='login-box'>
      <div styleName='LoginBox__LoginFormWrapper'>
        <div className='container jumbotron'>
          <BoxTitle />
          <LoginFormContainer doLoginCallback={doLoginCallback} />
        </div>
      </div>
    </div>
  );
};

export default withCSSModule(LoginBox, styles);
