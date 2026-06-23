import { useTranslation } from 'react-i18next'

export function useLanguage() {
  const { i18n } = useTranslation()

  const language = i18n.language || 'en'
  
  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
  ]

  return {
    language,
    setLanguage,
    languages,
  }
}
