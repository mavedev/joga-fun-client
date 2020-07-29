import React, { FC } from 'react';
import { Redirect } from 'react-router';

export const withRedirectOn = (on: boolean, to: string) => (Component: FC) => (
  on ? <Redirect to={to} /> : <Component />
);
