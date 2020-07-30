import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { createLoginThunk, AppState } from 'store';
import { withAuthRedirect } from 'hoc';
import LoginBox from './LoginBox';

type MapStateProps = {
  isLoggedIn: boolean;
}

type MapDispatchProps = {
  doLogin: (username: string, password: string) => void;
}

const mapStateToProps = (state: AppState): MapStateProps => ({
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps: MapDispatchProps = {
  doLogin: createLoginThunk
};

type OwnProps = {}
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const LoginContainer = ({ doLogin }: AllProps) => (
  <>
    <LoginBox doLoginCallback={doLogin} />
  </>
);

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer);
