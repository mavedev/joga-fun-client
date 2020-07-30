import {
  AuthState,
  LoginActionType,
  DO_LOGIN
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
    default:
      return state;
  }
};
