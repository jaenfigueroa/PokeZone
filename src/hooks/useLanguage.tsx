import {useContext} from 'react'
import { LanguageContext } from '../context/LanguageContext'

export const useLanguage = () => {
  const languageContext = useContext(LanguageContext)

  if (!languageContext) {
    throw new Error('LanguageContext debe estar dentro de LanguageProvider')
  }
  return languageContext
}