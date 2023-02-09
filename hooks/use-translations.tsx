import React from 'react'
import get from 'lodash/get'

import { Tooltip } from 'ui'

import { Chapter, Lesson, Translations } from 'types'

const tooltipRegex = /<Tooltip(.*?)>(.*?)<\/Tooltip>/gim
const contentRegex = /content="(.*?)"/
const hrefRegex = /href="(.*?)"/
const classNameRegex = /className="(.*?)"/
const targetRegex = />(.*?)</
const translations = {}

function loadTranslations() {
  const chapters = require('content/chapters').default
  const lessons = require('content/lessons').default

  const lessonTranslations = Object.values(lessons).reduce(
    (r: Translations, l: Lesson) => ({ ...r, ...l.translations }),
    {}
  ) as Translations

  const chapterTranslations = Object.values(chapters).reduce(
    (r: Translations, c: Chapter) => ({ ...r, ...c.translations }),
    {}
  ) as Translations

  const locales = Object.keys(lessonTranslations)
    .concat(Object.keys(chapterTranslations))
    .filter((locale, i, arr) => arr.indexOf(locale) === i)

  locales.forEach((locale) => {
    translations[locale] = {
      ...lessonTranslations[locale],
      ...chapterTranslations[locale],
    }
  })
}

export default function useTranslations() {
  if (Object.keys(translations).length === 0) {
    loadTranslations()
  }

  return function t(key: string) {
    const locale = 'en'
    let result = get(translations, `${locale}.${key}`)

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
}
