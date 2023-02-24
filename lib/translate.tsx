import React from 'react'
import Link from 'next/link'
import get from 'lodash/get'

import { Tooltip } from 'ui'
import { i18n } from 'config/i18n'

const tooltipRegex = /<Tooltip(.*?)>(.*?)<\/Tooltip>/gim
const linkRegex = /<Link(.*?)>(.*?)<\/Link>/gim
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

  const translations = i18n.locales.reduce(
    (r, locale) => ({ ...r, [locale]: {} }),
    {}
  )

  contentTranslations.forEach((t) => parseContentTranslations(t, translations))
  appTranslations.forEach((t) => parseAppTranslations(t, translations))

  return translations
}

function injectLinks(result) {
  return result
    .map((translation) => {
      if (typeof translation === 'object') {
        return translation
      }

      const parts = []
      let match
      let lastIndex = 0

      while ((match = linkRegex.exec(translation))) {
        const linkHtml = match[0]

        const hrefMatch = linkHtml.match(hrefRegex)
        const href = hrefMatch?.length > 0 ? hrefMatch[1] : null

        const classNameMatch = linkHtml.match(classNameRegex)
        const className = classNameMatch?.length > 0 ? classNameMatch[1] : null

        const label = linkHtml.match(targetRegex)[1]

        parts.push(translation.slice(lastIndex, match.index))

        parts.push(
          <Link href={href} className={className} target="_blank">
            {label}
          </Link>
        )

        lastIndex = linkRegex.lastIndex
      }

      parts.push(translation.slice(lastIndex))

      return parts
    })
    .flat()
}

function injectTooltips(result, lang) {
  return result
    .map((translation) => {
      if (typeof translation === 'object') {
        return translation
      }

      const parts = []
      let match
      let lastIndex = 0

      while ((match = tooltipRegex.exec(translation))) {
        const tooltipHtml = match[0]
        const tkey = tooltipHtml.match(contentRegex)[1]

        const hrefMatch = tooltipHtml.match(hrefRegex)
        const href = hrefMatch?.length > 0 ? hrefMatch[1] : null

        const classNameMatch = tooltipHtml.match(classNameRegex)
        const className = classNameMatch?.length > 0 ? classNameMatch[1] : null

        const label = tooltipHtml.match(targetRegex)[1]
        const tvalue = get(translations, `${lang}.${tkey}`) || tkey

        console.log(lang, tkey, tvalue)

        parts.push(translation.slice(lastIndex, match.index))
        parts.push(
          <Tooltip
            key={tkey}
            href={href}
            className={className}
            content={tvalue}
          >
            {label}
          </Tooltip>
        )

        lastIndex = tooltipRegex.lastIndex
      }

      parts.push(translation.slice(lastIndex))

      return parts
    })
    .flat()
}

export function t(key: string, lang: string) {
  if (Object.keys(translations).length === 0) {
    translations = loadTranslations()
  }

  if (!key) {
    return '{missing_translation_key}'
  }

  let translation = get(translations, `${lang}.${key}`)

  if (!translation) {
    return `{${key}}`
  }

  if (
    translation.indexOf('</Tooltip>') === -1 &&
    translation.indexOf('</Link>') === -1
  ) {
    return translation
  }

  let result = []

  result = injectLinks([translation])
  result = injectTooltips(result, lang)

  return result
}
