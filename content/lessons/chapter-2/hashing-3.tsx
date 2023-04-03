'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { HashChallenge } from 'ui'

export default function Hashing3({ lang }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <HashChallenge
      answer={'00'}
      next={`${routes.chaptersUrl}/chapter-2/scripting-1`}
      label={
        'Enter anything until you find a hash that starts with two zeroes ("00")'
      }
      label2={'Below you will see your input converted to a hash'}
    />
  )
}

export const metadata = {
  title: 'hashing_three.title',
}
