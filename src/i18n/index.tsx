import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en/translations.json';

const defaultLanguage = 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en
    },
    fallbackLng: defaultLanguage,
    lng: "en",

    debug: true,

    interpolation: {
      escapeValue: false,
    },

    react: {
      wait: true,
    },
  })

  export default i18n;