import i18n, { ModuleType } from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './en.js';
import th from './th.js';

const resources = {
  en: { translation: en },
  th: { translation: th },
};

const languageDetector = {
  type: 'languageDetector' as ModuleType,
  async: true,
  detect: (callback: (lang: string) => void) => {
    const bestLang = RNLocalize.findBestLanguageTag(['en','th'])
    callback(bestLang?.languageTag || 'en');
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
