'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { HashChallenge } from 'ui'

export default function Hashing6({ lang }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <HashChallenge
      answer="000"
      next={`${routes.chaptersUrl}/chapter-2/scripting-1`}
      inputLabel="Beware the Button!!"
      returnLabel="Below you will see your input converted to a hash"
      auto
    />
  )
}

export const metadata = {
  title: 'chapter_two.hashing_six.title',
}
