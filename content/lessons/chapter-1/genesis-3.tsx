'use client'

import { useTranslations } from 'hooks'
import { getLessonKey } from 'lib/progress'
import { CodeExample, LessonInfo, Title, Text, TerminalChallenge } from 'ui'

export const metadata = {
  title: 'chapter_one.genesis_three.title',
  navigation_title: 'chapter_one.genesis_three.nav_title',
  key: 'CH1GEN3',
}

export default function Genesis3({ lang }) {
  const t = useTranslations(lang)

  return (
    <TerminalChallenge
      expectedInput={{
        userVariable: '$scriptSigHex',
        value:
          '04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73',
      }}
      lessonKey={getLessonKey('chapter-1', 'genesis-3')}
      successMessage={t('chapter_one.genesis_three.success')}
      customLines={t('chapter_one.genesis_three.terminal_challenge_lines')}
    >
      <LessonInfo>
        <Title>{t('chapter_one.genesis_three.heading')}</Title>

        <Text className="mt-2 text-lg md:text-xl">
          {t('chapter_one.genesis_three.paragraph_one')}
        </Text>

        <Text className="mt-2 text-lg md:text-xl">
          {t('chapter_one.genesis_three.paragraph_two')}
        </Text>

        <CodeExample
          className="mt-4"
          code={`echo $scriptSigHex | xxd -r -p`}
          language="shell"
          copy
        />
      </LessonInfo>
    </TerminalChallenge>
  )
}
