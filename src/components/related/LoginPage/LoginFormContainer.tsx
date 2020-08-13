import React from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store';
import LoginForm from './LoginForm';

/** Store state props type. */
type MapStateProps = { noFailStatus: boolean; };
/** Store dispatch props type. */
type MapDispatchProps = {};
/** Normal component's props that are to be passed. */
type OwnProps = {
  doLoginCallback: (username: string, password: string) => void;
}
/** All props type. */
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const mapStateToProps = (state: AppState): MapStateProps => ({
  noFailStatus: state.auth.noFail
});

/** The container for the login form passing auth fail status from the store. */
const LoginFormContainer: React.FC<AllProps> = ({ noFailStatus, doLoginCallback }) => (
  <LoginForm noFailStatus={noFailStatus} doLoginCallback={doLoginCallback} />
);

export default connect(mapStateToProps)(LoginFormContainer);
