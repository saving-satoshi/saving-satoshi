'use client'

import { useTranslations } from 'hooks'
import { getLessonKey } from 'lib/progress'
import { HashChallenge } from 'ui'

export const metadata = {
  title: 'chapter_two.hashing_six.title',
  navigation_title: 'chapter_two.hashing_six.nav_title',
  key: 'CH2HSH6',
}

export default function Hashing6({ lang }) {
  const t = useTranslations(lang)

  return (
    <HashChallenge
      answer="00"
      inputLabel={t('chapter_two.hashing_six.heading')}
      returnLabel={t('hasher.return_hash')}
      lessonKey={getLessonKey('chapter-2', 'hashing-6')}
      answerHint
    />
  )
}
