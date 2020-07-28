import { Dispatch } from 'redux';

import { DO_LOGIN } from './types';
import { AppActionType } from '../types';

export const createSetLoggedIn = () => ({
  type: DO_LOGIN,
});

export const createLoginThunk = (
  username: string,
  password: string
) => (dispatch: Dispatch<AppActionType>) => {
};
