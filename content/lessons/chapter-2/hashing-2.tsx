'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { HashChallenge } from 'ui'

export default function Hashing2({ lang, params }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <HashChallenge
      answer={8}
      next={`${routes.chaptersUrl}/chapter-2/hashing-3`}
      inputLabel={t('chapter_two.hashing_two.heading')}
      returnLabel={t('hasher.return_hash')}
      hints
    />
  )
}

export const metadata = {
  title: 'chapter_two.hashing_two.title',
}
