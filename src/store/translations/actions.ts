import { Dispatch } from 'redux';
import { AppTranslator } from 'app-translator';

import { SET_LANGUAGE, LangActionType } from './types';

export const createSetLanguage = (language: string): LangActionType => ({
  type: SET_LANGUAGE,
  payload: language
});

export const createLanguageThunk = (language: string) => (
  dispatch: Dispatch<LangActionType>
) => {
  AppTranslator.setLanguage(language);
  dispatch(createSetLanguage(language));
};
