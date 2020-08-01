import i18nextInstance from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

/* App locales. */
const languages: string[] = ['en', 'ru', 'ua'];

/* Translator instance exported from i18next module. */
i18nextInstance
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    whitelist: languages,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18nextInstance;
