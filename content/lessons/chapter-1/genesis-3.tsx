'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { CodeExample, LessonInfo, Title, Text, TerminalChallenge } from 'ui'

export default function Genesis5({ lang }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <TerminalChallenge
      expectedInput={{
        userVariable: '$scriptSigHex',
        value:
          '04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73',
      }}
      saveInfo={{
        chapter: 'chapter-1',
        challenge: 'transacting-1',
      }}
      next={`${routes.chaptersUrl}/chapter-1/genesis-4`}
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

export const metadata = {
  title: 'chapter_one.genesis_three.title',
}
