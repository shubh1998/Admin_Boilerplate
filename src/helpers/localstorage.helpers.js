import { LANGUAGE } from 'constants/index'

export const setLocalLanguage = (lang) => {
  localStorage.setItem(LANGUAGE, lang)
}

export const getLocalLanguage = () => {
  return localStorage.getItem(LANGUAGE)
}
