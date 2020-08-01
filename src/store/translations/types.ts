export const SET_LANGUAGE = 'SET_LANGUAGE';

type SetLanguageType = {
  type: typeof SET_LANGUAGE;
  payload: string;
};

export type LangActionType = SetLanguageType;
