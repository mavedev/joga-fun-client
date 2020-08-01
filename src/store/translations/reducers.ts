import { SET_LANGUAGE } from './types';
import { AppActionType } from '../types';

type LangState = {
  currentLanguage: string;
};

const initialState: LangState = {
  currentLanguage: 'ru'
};

export const translatorReducer = (
  state: LangState = initialState,
  action: AppActionType
): LangState => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        currentLanguage: action.payload
      };
    default:
      return state;
  }
};
