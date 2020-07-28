import { Dispatch } from 'redux';

import API from 'api';

import { DO_LOGIN, LoginActionType } from './types';
import { AppActionType } from '../types';

export const createSetLoggedIn = (): LoginActionType => ({
  type: DO_LOGIN
});

export const createLoginThunk = (
  username: string,
  password: string
) => (dispatch: Dispatch<AppActionType>) => {
  API.login(username, password).then(() => {
    dispatch(createSetLoggedIn());
  });
};
