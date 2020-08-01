import i18instance from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next as i18module } from 'react-i18next';

import { TranslatorAPI } from 'translations';

const languages = ['en', 'ru', 'uk'];

export const configTranslations = () => {
  TranslatorAPI.config(
    i18instance,
    Backend,
    LanguageDetector,
    i18module
  ).instantiate({
    fallbackLng: 'en',
    whitelist: languages,
    interpolation: {
      escapeValue: false,
    }
  });
};
