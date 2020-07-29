import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { createLoginThunk } from 'store';
import { withRedirectOn } from 'hoc';
import LoginBox from './LoginBox';

type MapStateProps = {}

type MapDispatchProps = {
  doLogin: (username: string, password: string) => void;
}

const mapDispatchToProps: MapDispatchProps = {
  doLogin: createLoginThunk
};

type OwnProps = {}
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const LoginContainer: React.FC<AllProps> = ({ doLogin }: AllProps) => (
  <>
    <LoginBox doLoginCallback={doLogin} />
  </>
);

export default compose(
  withRedirectOn,
  connect(null, mapDispatchToProps)
)(LoginContainer);
