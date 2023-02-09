import React from 'react'
import get from 'lodash/get'

import { Tooltip } from 'ui'
import { Translations } from 'types'
import { locales } from 'config/locales'

const tooltipRegex = /<Tooltip(.*?)>(.*?)<\/Tooltip>/gim
const contentRegex = /content="(.*?)"/
const hrefRegex = /href="(.*?)"/
const classNameRegex = /className="(.*?)"/
const targetRegex = />(.*?)</

let translations = {}

function parseContentTranslations(arr, result) {
  arr.forEach((v) =>
    Object.entries(v).forEach(([ns, tr]) =>
      Object.keys(result).forEach(
        (locale) =>
          (result[locale] = {
            ...result[locale],
            [ns]: tr[locale],
          })
      )
    )
  )
}

function parseAppTranslations(obj, result) {
  Object.entries(obj).forEach(([namespace, tr]) => {
    Object.keys(result).forEach((locale) => {
      result[locale] = {
        ...result[locale],
        [namespace]: tr[locale],
      }
    })
  })
}

export function loadTranslations() {
  const { translations: chapters } = require('content/chapters')
  const { translations: introductions } = require('content/introductions')
  const { translations: lessons } = require('content/lessons')
  const { translations: components } = require('components/translations')

  const contentTranslations = [chapters, introductions, lessons]
  const appTranslations = [components]

  const translations = locales.reduce(
    (r, locale) => ({ ...r, [locale]: {} }),
    {}
  )

  contentTranslations.forEach((t) => parseContentTranslations(t, translations))
  appTranslations.forEach((t) => parseAppTranslations(t, translations))

  return translations
}

export function t(key: string, locale: string) {
  if (Object.keys(translations).length === 0) {
    translations = loadTranslations()
  }

  if (!key) {
    return '{missing_translation_key}'
  }

  let result = get(translations, `${locale}.${key}`)

  if (!result) {
    return `{${key}}`
  }

  if (result.indexOf('</Tooltip>') === -1) {
    return result
  }

  const parts = []
  let match
  let lastIndex = 0

  while ((match = tooltipRegex.exec(result))) {
    const tooltipHtml = match[0]
    const tkey = tooltipHtml.match(contentRegex)[1]

    const hrefMatch = tooltipHtml.match(hrefRegex)
    const href = hrefMatch?.length > 0 ? hrefMatch[1] : null

    const classNameMatch = tooltipHtml.match(classNameRegex)
    const className = classNameMatch?.length > 0 ? classNameMatch[1] : null

    const label = tooltipHtml.match(targetRegex)[1]
    const tvalue = get(translations, `${locale}.${tkey}`) || tkey

    parts.push(result.slice(lastIndex, match.index))
    parts.push(
      <Tooltip key={tkey} href={href} className={className} content={tvalue}>
        {label}
      </Tooltip>
    )

    lastIndex = tooltipRegex.lastIndex
  }

  parts.push(result.slice(lastIndex))

  return parts
}
