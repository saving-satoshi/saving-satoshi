'use client'

import { useTranslations } from 'hooks'
import { getLessonKey } from 'lib/progress'
import { LessonInfo, Text, Title, TerminalChallenge } from 'ui'

export const metadata = {
  title: 'chapter_one.transacting_three.title',
  navigation_title: 'chapter_one.transacting_three.nav_title',
  key: 'CH1TRA3',
}

export default function Transacting3({ lang }) {
  const t = useTranslations(lang)

  return (
    <TerminalChallenge
      expectedInput="44697374726963742032312c20426974636f696e2046726565646f6d205a6f6e65"
      lessonKey={getLessonKey('chapter-1', 'transacting-3')}
      successMessage={t(
        'chapter_one.transacting_three.terminal_challenge_success'
      )}
      customLines={t('chapter_one.transacting_three.terminal_challenge_lines')}
    >
      <LessonInfo>
        <Title>{t('chapter_one.transacting_three.heading')}</Title>

        <Text className="mt-2 text-lg md:text-xl">
          {t('chapter_one.transacting_three.paragraph_one')}
        </Text>

        <Text className="mt-2 text-lg md:text-xl">
          {t('chapter_one.transacting_three.paragraph_two')}
        </Text>
      </LessonInfo>
    </TerminalChallenge>
  )
}
