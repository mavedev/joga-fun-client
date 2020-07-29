import React from 'react';
import { Redirect } from 'react-router';

type AcceptableProps = {
  isLoggedIn: boolean
}

interface AcceptableComponent extends React.FC<AcceptableProps> {
  ({ isLoggedIn }: { isLoggedIn: boolean }): JSX.Element;
}

export const withAuthRedirect = (to: string) => (
  WrappedComponent: AcceptableComponent
) => {
  const { isLoggedIn } = (WrappedComponent.arguments as AcceptableProps);
  return (isLoggedIn ? <Redirect to={to} /> : WrappedComponent);
};
