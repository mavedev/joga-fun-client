import { Dispatch } from 'redux';

import API from 'misc/api';
import services from 'misc/services';
import {
  DO_LOGIN,
  SET_JWT,
  SET_NO_FAIL_STATUS,
  LoginActionType
} from './types';
import { AppActionType } from '../types';

export const createSetLoggedIn = (): LoginActionType => ({
  type: DO_LOGIN
});

export const createSetNoFailStatus = (status: boolean): LoginActionType => ({
  type: SET_NO_FAIL_STATUS,
  payload: status
});

export const createSetJWT = (jwt: string): LoginActionType => ({
  type: SET_JWT,
  payload: jwt
});

export const createLoginThunk = (
  username: string,
  password: string
) => (dispatch: Dispatch<AppActionType>) => {
  API.login(username, password)
    .then((response) => {
      dispatch(createSetLoggedIn());
      dispatch(createSetJWT(response.data['token']));
      services.cookies.set('access-token', response.data['token'], { path: '/' });
    })
    .catch(() => {
      dispatch(createSetNoFailStatus(false));
    });
};
