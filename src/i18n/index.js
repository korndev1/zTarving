import I18n from 'react-native-i18n';
import en from './en';
import th from './th';

// Set translations
I18n.translations = {
  en,
  th,
};

// Optional: fallback to English if translation not found
I18n.fallbacks = true;

export default I18n;
