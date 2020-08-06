import { SET_LOCALE, LocalesActionType } from './types';

type LAType = LocalesActionType;

export const createSetLocale = (locale: string): LAType => ({
  type: SET_LOCALE,
  payload: locale
});
