'use client'

import { useTranslations } from 'hooks'
import { HashChallenge } from 'ui'

export const metadata = {
  title: 'chapter_two.hashing_four.title',
  navigation_title: 'chapter_two.hashing_four.nav_title',
  key: 'CH2HSH4',
}

export default function Hashing4({ lang }) {
  const t = useTranslations(lang)

  return (
    <HashChallenge
      answer="0"
      inputLabel={t('chapter_two.hashing_four.heading')}
      returnLabel={t('hasher.return_hash')}
      lessonKey={metadata.key}
      answerHint
    />
  )
}
