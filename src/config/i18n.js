import { Platform, NativeModules } from 'react-native'

import en from '../@saphire/locales/en'
import pt from '../@saphire/locales/pt'
import es from '../@saphire/locales/es'

let locale = Platform.OS === 'ios'
  ? NativeModules.SettingsManager.settings.AppleLocale.substring(0, 2)
  : NativeModules.I18nManager.localeIdentifier.substring(0, 2) // Global locale variable

/**
 * Set the application locale
 * @function setLocale
 * @param {pt | en | es} newLocale - The new locale to be set globally
 */
function setLocale (newLocale) {
  switch (newLocale) {
    case 'pt':
    case 'en':
    case 'es':
      locale = newLocale
      break
    default:
      locale = 'pt'
  }
}

/**
 * Get the global applpication locale
 * @function getLocale
 */
function getLocale () {
  return locale
}

/**
 * Get the translations file to the current locale
 * @function getTranslationsForLocale
 */
function getTranslationsForLocale () {
  switch (locale) {
    case 'pt':
      return pt
    case 'en':
      return en
    case 'es':
      return es
    default:
      return pt
  }
}

/**
 * Translate a given key into a string, and use params
 * to replace variables
 * @function translate
 * @param {string} key - The string id to be fetched into translation file
 * @param {object} params - The params to replace into the final string
 */
function translate (key, params) {
  const tokens = key.split('.')
  let iterator = getTranslationsForLocale()

  tokens.forEach(token => {
    if (iterator != null) {
      iterator = iterator[token]
    }
  })

  if (typeof iterator === 'string') {
    return params == null ? iterator : replaceParams(iterator, params)
  }

  return key
}

/**
 * Auxiliar function to replace the given
 * params into the final string.
 *
 * Param Syntax: {{ParamName}}
 *
 * @function replaceParams
 * @param {string} string - The already translated string
 * @param {object} params - The params to replace into the given string
 */
function replaceParams (string, params) {
  const keys = Object.keys(params)
  let parsed = string

  keys.forEach(key => {
    parsed = parsed.split(`{{${key}}}`).join(params[key])
  })

  return parsed
}

export default {
  getLocale,
  setLocale,
  getTranslationsForLocale,
  translate
}
