import React from 'react'
import Link from 'next/link'
import get from 'lodash/get'

import { Tooltip } from 'ui'
import { i18n } from 'i18n/config'
import { InjectableComponentType as ComponentType } from 'types'

const contentRegex = /content="(.*?)"/
const hrefRegex = /href="(.*?)"/
const targetRegex = /target="(.*?)"/
const relRegex = /rel="(.*?)"/
const classNameRegex = /className="(.*?)"/
const labelRegex = />(.*?)</

const componentRegexes = {
  [ComponentType.Link]: /<Link(.*?)>(.*?)<\/Link>/gim,
  [ComponentType.Tooltip]: /<Tooltip(.*?)>(.*?)<\/Tooltip>/gim,
  [ComponentType.A]: /<a(.*?)>(.*?)<\/a>/gim,
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

export function loadTranslations(lang) {
  const {
    translations: localeTranslations,
  } = require(`../i18n/locales/${lang}`)

  const Translations = [localeTranslations]

  const translations = i18n.locales.reduce(
    (r, locale) => ({ ...r, [locale]: {} }),
    {}
  )

  Translations.forEach((t) => parseTranslations(t, translations))

  return translations
}

export function t(key: string, lang: string) {
  if (Object.keys(translations).length === 0) {
    translations = loadTranslations(lang)
  }

  if (!key) {
    return '{missing_translation_key}'
  }

  let translation = get(translations, `${lang}.${key}`)

  if (!translation) {
    // Fallback translation
    return get(translations, `en.${key}`)
  }

  if (
    translation.indexOf('</Tooltip>') === -1 &&
    translation.indexOf('</Link>') === -1 &&
    translation.indexOf('</a>') === -1
  ) {
    return translation
  }

  let result = []

  result = injectComponent([translation], ComponentType.Link)
  result = injectComponent(result, ComponentType.Tooltip)
  result = injectComponent(result, ComponentType.A)

  return result
}

function injectComponent(result, type) {
  return result.map((part) => {
    if (typeof part !== 'string') {
      return part
    }

    const regex = componentRegexes[type]
    const parts = []
    let match
    let index = 0
    let lastIndex = 0

    while ((match = regex.exec(part))) {
      parts.push(part.slice(lastIndex, match.index))

      const html = match[0]
      const label = getFirstMatch(html, labelRegex)
      const href = getFirstMatch(html, hrefRegex)
      const className = getFirstMatch(html, classNameRegex)

      switch (type) {
        case ComponentType.A: {
          const target = getFirstMatch(html, targetRegex)
          const rel = getFirstMatch(html, relRegex)
          parts.push(
            <a
              key={index}
              href={href}
              target={target}
              rel={rel}
              className="underline"
            >
              {label}
            </a>
          )
          break
        }

        case ComponentType.Link: {
          parts.push(
            <Link
              href={href}
              className={`${className} cursor-pointer`}
              target="_blank"
            >
              {label}
            </Link>
          )
          break
        }

        case ComponentType.Tooltip: {
          const tkey = html.match(contentRegex)[1]

          parts.push(
            <Tooltip
              key={tkey}
              href={href}
              className={`${className} cursor-pointer`}
              content={tkey}
            >
              {label}
            </Tooltip>
          )
          break
        }
      }

      lastIndex = regex.lastIndex
      index++
    }

    parts.push(part.slice(lastIndex))

    return parts.length > 1 ? parts : parts[0]
  })
}

function getFirstMatch(input: string, regex: RegExp) {
  const match = input.match(regex)

  return match?.length > 0 ? match[1] : null
}
