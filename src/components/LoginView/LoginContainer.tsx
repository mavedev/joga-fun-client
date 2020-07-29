import React from 'react';
import { connect } from 'react-redux';

import { AppState, createLoginThunk } from 'store';
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

const LoginContainer: React.FC<AllProps> = ({ isLoggedIn, doLogin }: AllProps) => (
  <>
    <LoginBox doLoginCallback={doLogin} />
  </>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
