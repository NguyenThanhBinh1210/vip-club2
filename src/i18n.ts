import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './locales/en/translation.json'
import viTranslation from './locales/vi/translation.json'
import jaTranslation from './locales/ja/translation.json'
import zhTranslation from './locales/zh/translation.json'

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      vi: {
        translation: viTranslation  
      },
      ja: {
        translation: jaTranslation
      },
      'zh-CN': {                    // Simplified Chinese (phổ biến nhất)
        translation: zhTranslation
      },
      'zh-TW': {                    // Traditional Chinese (Đài Loan)
        translation: zhTranslation  
      },
      'zh-HK': {                    // Traditional Chinese (Hong Kong)
        translation: zhTranslation
      }
    },
    // ... other config
  }) 