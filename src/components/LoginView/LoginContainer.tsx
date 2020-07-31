import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { createLoginThunk } from 'store';
import { withHomeRedirect } from 'hoc';
import LoginBox from './LoginBox';

/* Store state props type. */
type MapStateProps = {}
/* Store dispatch props type. */
type MapDispatchProps = {
  doLogin: (username: string, password: string) => void;
}
/* Normal component's props that are to be passed. */
type OwnProps = {}
/* All props type. */
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const mapDispatchToProps: MapDispatchProps = {
  doLogin: createLoginThunk
};

/* The container for the login box passing store's auth dispatcher.
   Redirects to home in case of successful login. */
const LoginContainer = ({ doLogin }: AllProps) => (
  <LoginBox doLoginCallback={doLogin} />
);

export default compose<React.ComponentType<OwnProps>>(
  withHomeRedirect('/'),
  connect(null, mapDispatchToProps)
)(LoginContainer);
