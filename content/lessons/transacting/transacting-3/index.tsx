'use client'
import { useTranslations } from 'hooks'
import { LessonInfo, CodeExample, Text, Title, TerminalChallenge } from 'ui'

export default function Transacting3({ lang }) {
  const t = useTranslations(lang)
  return (
    <TerminalChallenge
      expectedInput={
        '6a1c5361746f7368693433335061726b53744368696e6f43413933323433'
      }
      saveInfo={{
        chapter: 'chapter-1',
        challenge: 'done',
      }}
      next="/chapters/chapter-1/done"
      successMessage={t('transacting_three.terminal_challenge_success')}
      customLines={t('transacting_three.terminal_challenge_lines')}
      commonError={{
        error: '$scriptPubKeyHex',
        message: t('transacting_three.terminal_challenge_error'),
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
