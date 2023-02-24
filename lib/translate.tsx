import React from 'react'
import Link from 'next/link'
import get from 'lodash/get'

import { Tooltip } from 'ui'
import { i18n } from 'config/i18n'
import { InjectableComponentType as ComponentType } from 'types'

const contentRegex = /content="(.*?)"/
const hrefRegex = /href="(.*?)"/
const classNameRegex = /className="(.*?)"/
const targetRegex = />(.*?)</

const componentRegexes = {
  [ComponentType.Link]: /<Link(.*?)>(.*?)<\/Link>/gim,
  [ComponentType.Tooltip]: /<Tooltip(.*?)>(.*?)<\/Tooltip>/gim,
}

let translations = {}

function parseTranslations(arr, result) {
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

export function loadTranslations() {
  const { translations: chapters } = require('content/chapters')
  const { translations: introductions } = require('content/introductions')
  const { translations: lessons } = require('content/lessons')
  const { translations: components } = require('components')
  const { translations: ui } = require('ui')
  const { translations: shared } = require('shared')

  const Translations = [
    chapters,
    introductions,
    lessons,
    components,
    ui,
    shared,
  ]

  const translations = i18n.locales.reduce(
    (r, locale) => ({ ...r, [locale]: {} }),
    {}
  )

  Translations.forEach((t) => parseTranslations(t, translations))

  return translations
}

export function t(key: string, lang: string) {
  if (Object.keys(translations).length === 0) {
    translations = loadTranslations()
  }

  if (!key) {
    return '{missing_translation_key}'
  }

  let translation = get(translations, `${lang}.${key}`)

  if (!lang) {
    lang === 'en'
  }

  if (!translation) {
    console.log(`No translation for {${lang}.${key}}`)
    let fallbackTranslation = get(translations, `en.${key}`)
    return fallbackTranslation
  }

  if (
    translation.indexOf('</Tooltip>') === -1 &&
    translation.indexOf('</Link>') === -1
  ) {
    return translation
  }

  let result = []

  result = injectComponent([translation], ComponentType.Link, lang)
  result = injectComponent(result, ComponentType.Tooltip, lang)

  return result
}

function injectComponent(result, type, lang) {
  return result.map((part) => {
    if (typeof part !== 'string') {
      return part
    }

    const regex = componentRegexes[type]
    const parts = []
    let match
    let lastIndex = 0

    while ((match = regex.exec(part))) {
      parts.push(part.slice(lastIndex, match.index))

      const html = match[0]
      const label = html.match(targetRegex)[1]
      const hrefMatch = html.match(hrefRegex)
      const href = hrefMatch?.length > 0 ? hrefMatch[1] : null

      const classNameMatch = html.match(classNameRegex)
      const className = classNameMatch?.length > 0 ? classNameMatch[1] : null

      switch (type) {
        case ComponentType.Link: {
          parts.push(
            <Link href={href} className={className} target="_blank">
              {label}
            </Link>
          )

          break
        }

        case ComponentType.Tooltip: {
          const tkey = html.match(contentRegex)[1]
          const tvalue = get(translations, `${lang}.${tkey}`) || tkey

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
          break
        }
      }
      lastIndex = regex.lastIndex
    }

    parts.push(part.slice(lastIndex))

    return parts.length > 1 ? parts : parts[0]
  })
}
