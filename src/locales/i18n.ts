import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTransition from './en/translation.json'
import koTransition from './ko/translation.json'

import viTransition from './vi/translation.json'
import jaTransition from './ja/translation.json'
import zhTransition from './zh/translation.json'
import msTranslation from './ms/translation.json'
import kmTranslation from './km/translation.json'
import idTranslation from './id/translation.json'
import thTranslation from './th/translation.json'
import zhHansTranslation from './zh-Hans/translation.json'
import zhHantTranslation from './zh-Hant/translation.json'
import myTranslation from './my/translation.json'
import bnTranslation from './bn/translation.json'
import esTranslation from './es/translation.json'
import ptTranslation from './pt/translation.json'
import trTranslation from './tr/translation.json'
import deTranslation from './de/translation.json'
import ruTranslation from './ru/translation.json'
import htTranslation from './ht/translation.json'
import swTranslation from './sw/translation.json'
const i18nOptions = {
    resources: {
        vn: { translations: viTransition },
        en: { translations: enTransition },
        ko: { translations: koTransition },
        ja: { translations: jaTransition },
        zh: { translations: zhTransition },
    
        ms: { translations: msTranslation },
        km: { translations: kmTranslation },
        id: { translations: idTranslation },
        th: { translations: thTranslation },
        'zh-Hans': { translations: zhHansTranslation },
        'zh-Hant': { translations: zhHantTranslation },
        my: { translations: myTranslation },
        bn: { translations: bnTranslation },
        es: { translations: esTranslation },
        pt: { translations: ptTranslation },
        tr: { translations: trTranslation },
        de: { translations: deTranslation },
        ru: { translations: ruTranslation },
        ht: { translations: htTranslation },
        sw: { translations: swTranslation },
      },
    lng: 'vn',
    fallbackLng: 'vn',
    debug: false,
    ns: ['translations', 'errors', 'validations'],
    defaultNS: 'translations',
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    }
}

i18n.use(initReactI18next).init(i18nOptions)

export default i18n
