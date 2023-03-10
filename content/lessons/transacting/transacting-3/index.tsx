'use client'

import { useTranslations } from 'hooks'
import {
  Button,
  LessonInfo,
  CodeExample,
  Text,
  Title,
  TerminalChallenge,
} from 'ui'

export default function Transacting3({ lang }) {
  const t = useTranslations(lang)

  return (
    <TerminalChallenge
      expectedInput="5361746f7368693433335061726b53744368696e6f43413933323433"
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

        <Text className="mt-2 text-lg md:text-xl">
          {t('transacting_three.paragraph_one')}
        </Text>

        <Text className="mt-2 text-lg md:text-xl">
          {t('transacting_three.paragraph_two')}
        </Text>

        <CodeExample
          className="mt-4"
          code="echo $scriptPubKeyBytes | xxd -r -p"
          language="shell"
          copy
        />

        <Text className="mt-4 text-lg md:text-xl">
          {t('transacting_three.paragraph_three')}
        </Text>

        <div className="mt-4 flex">
          <Button
            size="small"
            href="https://blockstream.info/tx/ee3b8caaeb58245338dd299467de89ec6833d2a4235493c95059934603b5e98d?expand"
            external={true}
            classes="w-full md:auto"
          >
            {t('transacting_three.link')}
          </Button>
        </div>
      </LessonInfo>
    </TerminalChallenge>
  )
}

export const metadata = {
  title: 'transacting_three.title',
}
