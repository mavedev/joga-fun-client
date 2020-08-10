import i18instance from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next as i18module } from 'react-i18next';

import { TranslatorAPI } from 'misc/services/translations/translatorAPI';
import * as constants from 'invariants';

export default class TranslationService {
  /** Setup translator to be dynamically used while render. */
  public static configTranslations = () => {
    TranslatorAPI.config(
      i18instance,
      Backend,
      LanguageDetector,
      i18module
    ).instantiate({
      fallbackLng: constants.DEFAULT_FALLBACK_LANG,
      lng: constants.DEFAULT_LANG,
      whitelist: constants.LANGS_LIST,
      interpolation: {
        escapeValue: false,
      }
    });
  };
}
