export const DO_LOGIN = 'DO_LOGIN';
export const SET_NO_FAIL_STATUS = 'SET_NO_FAIL_STATUS';
export const SET_JWT = 'SET_JWT';

export type AuthState = {
  isLoggedIn: boolean;
  noFail: boolean;
  jwt: string;
};

type DoLoginActionType = {
  type: typeof DO_LOGIN;
};

type SetNoFailStatusActionType = {
  type: typeof SET_NO_FAIL_STATUS;
  payload: boolean;
};

type SetJWTActionType = {
  type: typeof SET_JWT;
  payload: string;
};

export type LoginActionType = DoLoginActionType
  | SetNoFailStatusActionType
  | SetJWTActionType;
