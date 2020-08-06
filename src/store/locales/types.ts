export const SET_LOCALE = 'SET_LOCALE';

export type LocalesState = {
  locale: string;
};

type SetLocaleActionType = {
  type: typeof SET_LOCALE;
  payload: string;
};

export type LocalesActionType = SetLocaleActionType;
