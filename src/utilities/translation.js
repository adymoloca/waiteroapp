import { I18nManager } from 'react-native'
import I18n from 'react-native-i18n'

import en from '@config/translation/en'

import Languages from '@config/language'

I18n.fallbacks = true
I18n.defaultLocale = 'en'
I18n.locale = 'en'
I18n.translations = {
  en
}
I18nManager.allowRTL(false)

export const setLocale = (language, direction) => {
  I18n.locale = language
  I18nManager.allowRTL(direction == 'rtl')
  // I18nManager.forceRTL(direction=='rtl')
}

export const setDefaultLocale = async () => {
  const l = Languages.find(item => (item.code === code))
  if (l) {
    setLocale(code, l.direction)
  }
}

export const __ = (name, params = {}) => (I18n.t(name, { ...params, defaultValue: name }))
