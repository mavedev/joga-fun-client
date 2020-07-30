import React from 'react';
import { Redirect } from 'react-router';

import { store } from 'store';

type AnyComponent = React.ComponentType<any>;

export const withAuthRedirect = (to: string) => (Wrapped: AnyComponent) => (
  props: any
): JSX.Element => (
  store.getState().auth.isLoggedIn
  // eslint-disable-next-line react/jsx-props-no-spreading
    ? <Redirect to={to} /> : <Wrapped {...props} />
);
