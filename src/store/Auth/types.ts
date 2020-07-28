export const DO_LOGIN = 'DO_LOGIN';

export interface AuthState {
  isLoggedIn: boolean
}

interface DoLoginActionType {
  type: typeof DO_LOGIN;
}

export type LoginActionType = DoLoginActionType;
