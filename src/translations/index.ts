import { i18n, ThirdPartyModule, InitOptions } from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export type TranslatorBackendType = typeof Backend;
export type LanguageDetectorType = typeof LanguageDetector;

export class TranslatorAPI {
  private static translator: i18n;

  private constructor() {}

  public static config = (
    translator: i18n,
    backend: TranslatorBackendType,
    languageDetector: LanguageDetectorType,
    moduleInstantiator: ThirdPartyModule
  ) => {
    translator.use(backend).use(languageDetector).use(moduleInstantiator);
    TranslatorAPI.translator = translator;
    return TranslatorAPI;
  }

  public static instantiate = (options: InitOptions) => {
    TranslatorAPI.translator.init(options);
  }
}
