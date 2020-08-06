import * as constants from 'appConstants';
import { SET_LOCALE, LocalesState, LocalesActionType } from './types';

const initialState: LocalesState = {
  locale: constants.DEFAULT_LANG
};

export const localesReducer = (
  state: LocalesState = initialState,
  action: LocalesActionType
): LocalesState => {
  switch (action.type) {
    case SET_LOCALE:
      return {
        locale: action.payload
      };
    default:
      return state;
  }
};
