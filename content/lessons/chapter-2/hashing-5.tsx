'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { getLessonKey } from 'lib/progress'
import { HashChallenge } from 'ui'

export const metadata = {
  title: 'chapter_two.hashing_five.title',
  key: 'CH2HSH5',
}

export default function Hashing5({ lang }) {
  const t = useTranslations(lang)

  return (
    <HashChallenge
      answer="00"
      inputLabel={t('chapter_two.hashing_five.heading')}
      returnLabel={t('hasher.return_hash')}
      lessonKey={getLessonKey('chapter-2', 'hashing-5')}
      answerHint
    />
  )
}
