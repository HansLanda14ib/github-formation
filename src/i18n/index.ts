import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enCommon from '../locales/en/common.json'
import enModules from '../locales/en/modules.json'
import frCommon from '../locales/fr/common.json'
import frModules from '../locales/fr/modules.json'

const resources = {
  en: {
    common: enCommon,
    modules: enModules,
  },
  fr: {
    common: frCommon,
    modules: frModules,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'modules'],
    interpolation: {
      escapeValue: false, // React already handles XSS
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
