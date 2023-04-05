'use client'

import { chapters } from 'content/chapters'
import { useLocalizedRoutes, useTranslations } from 'hooks'
import { HashChallenge } from 'ui'

export default function Hashing4({ lang, params }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <HashChallenge
      answer="0"
      next={`${routes.chaptersUrl}/chapter-2/hashing-5`}
      inputLabel={t('chapter_two.hashing_four.heading')}
      returnLabel={t('hasher.return_hash')}
      answerHint
    />
  )
}

export const metadata = {
  title: 'chapter_two.hashing_four.title',
}
