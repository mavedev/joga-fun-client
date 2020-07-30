export const DO_LOGIN = 'DO_LOGIN';
export const SET_JWT = 'SET_JWT';

export type AuthState = {
  isLoggedIn: boolean;
  jwt: string;
}

type DoLoginActionType = {
  type: typeof DO_LOGIN;
}

type SetJWTActionType = {
  type: typeof SET_JWT;
}

export type LoginActionType = DoLoginActionType | SetJWTActionType;
