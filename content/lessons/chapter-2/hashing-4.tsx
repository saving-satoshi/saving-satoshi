'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { HashChallenge } from 'ui'

export default function Hashing3({ lang }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <HashChallenge
      answer={'000'}
      next={`${routes.chaptersUrl}/chapter-2/scripting-1`}
      label={'Beware the Button!!'}
      label2={'Below you will see your input converted to a hash'}
      auto
    />
  )
}

export const metadata = {
  title: 'hashing_four.title',
}
