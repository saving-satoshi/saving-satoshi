'use client'
import { useTranslations } from 'hooks'
import { LessonInfo, CodeExample, Text, Title, TerminalChallenge } from 'ui'

export default function Transacting3({ lang }) {
  const t = useTranslations(lang)
  return (
    <TerminalChallenge
      expectedInput={'6a127461636f7320666f722065766572796f6e65'}
      saveInfo={{
        chapter: 'chapter-1',
        challenge: 'done',
      }}
      next="/chapters/chapter-1/done"
      successMessage={t('transacting_three.terminalChallengeSuccess')}
      customLines={t('transacting_three.terminalChallengeLines')}
      commonError={{
        error: '$scriptPubKeyHex',
        message: t('transacting_three.terminalChallengeErrMessage'),
      }}
    >
      <LessonInfo>
        <Title>{t('transacting_three.heading')}</Title>

        <Text className="text-lg">{t('transacting_three.paragraph_one')}</Text>

        <Text className="text-lg">{t('transacting_three.paragraph_two')}</Text>

        <Text className="text-lg">
          {t('transacting_three.paragraph_three')}
        </Text>

        <CodeExample
          code={'echo $scriptPubKeyHex | xxd -r -p'}
          language="shell"
          copy
        />
      </LessonInfo>
    </TerminalChallenge>
  )
}

export const metadata = {
  title: 'transacting_three.title',
}
