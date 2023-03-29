'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { Button, LessonInfo, Title, Text, InputChallenge } from 'ui'
import HashChallenge from 'ui/lesson/HashChallenge'

export default function Hashing1({ lang }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <HashChallenge
      answer={'00'}
      next={`${routes.chaptersUrl}/chapter-1/genesis-3`}
      label={
        'Enter anything until you find a hash that starts with two zeroes ("00")'
      }
      label2={'Below you will see your input converted to a hash'}
      auto={false}
    ></HashChallenge>
  )
}

export const metadata = {
  title: 'hashing_one.title',
}
