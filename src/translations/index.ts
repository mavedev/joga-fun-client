import {
  AppTranslator, Vocabulary, VocabulariesCollection,
  t as getText
} from 'app-translator';

import * as constants from 'appConstants';

const english: Vocabulary = {
  BCP47: 'en',
  name: 'English',
  pairs: {
    'headerTitle': 'Joga World',
    'yes': 'yes'
  }
};

const russian: Vocabulary = {
  BCP47: 'ru',
  name: 'Русский',
  pairs: {
    'headerTitle': 'Мир йоги',
    'yes': 'да'
  }
};

/* Combine the vocabularies in a collection. */
const collection: VocabulariesCollection = {
  en: english,
  ru: russian
};

/* Inizialize AppTransaltor with default language */
AppTranslator.initialize(constants.DEFAULT_LANG, collection);

export default getText;
