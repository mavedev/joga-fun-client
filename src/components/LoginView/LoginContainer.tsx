import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { createLoginThunk } from 'store';
import { withAuthRedirect } from 'hoc';
import LoginBox from './LoginBox';

type MapDispatchProps = {
  doLogin: (username: string, password: string) => void;
}

const mapDispatchToProps: MapDispatchProps = {
  doLogin: createLoginThunk
};

type MapStateProps = {}
type OwnProps = {}
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const LoginContainer = ({ doLogin }: AllProps) => (
  <LoginBox doLoginCallback={doLogin} />
);

export default compose<React.ComponentType<OwnProps>>(
  withAuthRedirect,
  connect(null, mapDispatchToProps)
)(LoginContainer);
