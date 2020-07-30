import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { AppState } from 'store';

/* Acceptable components' types. */
type AnyComponent = React.ComponentType<any>;
/* Store state props type. */
type MapStateProps = { isLoggedIn: boolean; };
/* Store dispatch props type. */
type MapDispatchProps = {};
/* Type for props that will be passed by the store. */
type AllInjectedProps = MapStateProps & MapDispatchProps;
/* All props type with children.
   Needed for static props check in the inner function. */
type AllProps = AllInjectedProps & { children?: React.ReactNode; };

/* State props connection. */
const mapStateToProps = (state: AppState): MapStateProps => ({
  isLoggedIn: state.auth.isLoggedIn
});

/* Outer function returning the HOC. */
export const withAuthRedirect = (to: string) => (Wrapped: AnyComponent) => {
  /* Inner container needed to encapsulate redirection stuff. */
  const RedirectContainer: React.FC<AllInjectedProps> = (
    { isLoggedIn, children }: AllProps
  ): JSX.Element => (
    <>{isLoggedIn ? <Redirect to={to} /> : children}</>
  );
  const ConnectedContainer = connect(mapStateToProps)(RedirectContainer);

  /* The result. */
  return (props: any): JSX.Element => (
    <ConnectedContainer>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Wrapped {...props} />
    </ConnectedContainer>
  );
};
