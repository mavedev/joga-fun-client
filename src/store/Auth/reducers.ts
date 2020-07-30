import {
  AuthState,
  LoginActionType,
  DO_LOGIN,
  SET_JWT
} from './types';

const initialState: AuthState = {
  isLoggedIn: false,
  jwt: ''
};

export const loginReducer = (
  state: AuthState = initialState,
  action: LoginActionType
): AuthState => {
  switch (action.type) {
    case DO_LOGIN:
      return {
        isLoggedIn: true,
        jwt: state.jwt
      };
    case SET_JWT:
      return {
        isLoggedIn: state.isLoggedIn,
        jwt: action.payload
      };
    default:
      return state;
  }
};
