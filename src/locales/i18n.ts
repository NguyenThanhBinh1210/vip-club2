import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTransition from './en/translation.json'
import koTransition from './ko/translation.json'

import viTransition from './vi/translation.json'

const i18nOptions = {
    resources: {
        vn: {
            translations: viTransition
        },
        en: {
            translations: enTransition
        },
        ko: {
            translations: koTransition
        },

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
