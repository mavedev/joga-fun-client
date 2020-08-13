import {
  AuthState,
  LoginActionType,
  DO_LOGIN,
  SET_NO_FAIL_STATUS,
  SET_JWT
} from './types';

const initialState: AuthState = {
  isLoggedIn: false,
  noFail: true,
  jwt: ''
};

export const loginReducer = (
  state: AuthState = initialState,
  action: LoginActionType
): AuthState => {
  switch (action.type) {
    case DO_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case SET_NO_FAIL_STATUS:
      return {
        ...state,
        noFail: action.payload
      };
    case SET_JWT:
      return {
        ...state,
        jwt: action.payload
      };
    default:
      return state;
  }
};
