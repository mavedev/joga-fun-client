import React from 'react';
import { connect } from 'react-redux';

import { createLoginThunk } from 'store';
import LoginBox from './LoginBox';

type MapDispatchProps = {
  doLogin: (username: string, password: string) => void;
}

const mapDispatchToProps: MapDispatchProps = {
  doLogin: createLoginThunk
};

type OwnProps = {}
type AllProps = MapDispatchProps & OwnProps;

const LoginContainer: React.FC<AllProps> = ({ doLogin }: AllProps) => (
  <>
    <LoginBox doLoginCallback={doLogin} />
  </>
);

export default connect(null, mapDispatchToProps)(LoginContainer);
