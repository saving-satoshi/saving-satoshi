'use client'

import { useTranslations } from 'hooks'
import { getLessonKey } from 'lib/progress'
import { HashChallenge } from 'ui'

export const metadata = {
  title: 'chapter_two.hashing_two.title',
  key: 'CH2HSH2',
}

export default function Hashing2({ lang }) {
  const t = useTranslations(lang)

  return (
    <HashChallenge
      answer={8}
      inputLabel={t('chapter_two.hashing_two.heading')}
      returnLabel={t('hasher.return_hash')}
      lessonKey={getLessonKey('chapter-2', 'hashing-2')}
      inProgressMessage={t('chapter_two.hashing_two.progress_message')}
      successMessage={t('chapter_two.hashing_two.success_message')}
      hints
    />
  )
}
