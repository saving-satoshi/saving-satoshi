'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { HashChallenge } from 'ui'

export default function Hashing5({ lang, params }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <HashChallenge
      answer="00"
      next={`${routes.chaptersUrl}/chapter-2/hashing-6`}
      inputLabel={t('chapter_two.hashing_five.heading')}
      returnLabel={t('hasher.return_hash')}
      answerHint
    />
  )
}

export const metadata = {
  title: 'chapter_two.hashing_five.title',
}
