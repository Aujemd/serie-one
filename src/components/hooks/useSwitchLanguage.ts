import { useEffect } from 'react'
import i18n from '../../i18n'
import { Observable } from 'windowed-observable'

const observable = new Observable('language')

export const useSwitchLanguage = () => {
  const handleLanguageChange = (languageId) => {
    i18n.changeLanguage(languageId)
  }

  useEffect(() => {
    observable.subscribe(handleLanguageChange)
    return () => {
      observable.unsubscribe(handleLanguageChange)
    }
  }, [])
}
