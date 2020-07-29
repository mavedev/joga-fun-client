import React from 'react';
import { Redirect } from 'react-router';

interface AcceptableComponent extends React.FC {
  ({ isLoggedIn }: { isLoggedIn: boolean }): JSX.Element;
}

export const withHomeRedirect = (to: string) => (
  WrappedComponent: AcceptableComponent
) => {
  const { isLoggedIn } = WrappedComponent.arguments;
  return (isLoggedIn ? <Redirect to={to} /> : WrappedComponent);
};
