import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as locales from './locales/index'
import { getLocalLanguage } from 'helpers/localstorage.helpers'
import { LANGUAGES } from 'constants/index'

i18n.use(initReactI18next).init({
  resources: {
    ...Object.entries(locales).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value
        }
      }),
      {}
    )
  }, // Available languages
  lng: getLocalLanguage() || LANGUAGES[0].languageCode, // by default english language
  fallbackLng: LANGUAGES[0].languageCode
})

export default i18n
