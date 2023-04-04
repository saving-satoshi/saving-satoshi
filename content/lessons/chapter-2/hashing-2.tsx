'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { HashChallenge } from 'ui'

export default function Hashing2({ lang }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <HashChallenge
      answer="0"
      next={`${routes.chaptersUrl}/chapter-2/hashing-3`}
      inputLabel='Enter anything until you find a hash that starts with one zeroes ("0")'
      returnLabel="Below you will see your input converted to a hash"
      answerHint="popcorn"
    />
  )
}

export const metadata = {
  title: 'hashing_two.title',
}
