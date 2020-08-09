import { Dispatch } from 'redux';

import API from 'api';
import { cookieService } from 'services';
import { DO_LOGIN, SET_JWT, LoginActionType } from './types';
import { AppActionType } from '../types';

export const createSetLoggedIn = (): LoginActionType => ({
  type: DO_LOGIN
});

export const createSetJWT = (jwt: string): LoginActionType => ({
  type: SET_JWT,
  payload: jwt
});

export const createLoginThunk = (
  username: string,
  password: string
) => (dispatch: Dispatch<AppActionType>) => {
  API.login(username, password).then((response) => {
    dispatch(createSetLoggedIn());
    dispatch(createSetJWT(response.data['token']));
    cookieService.set('access-token', response.data['token'], { path: '/' });
  });
};
