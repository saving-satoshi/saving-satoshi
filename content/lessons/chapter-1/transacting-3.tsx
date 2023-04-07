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

export const metadata = {
  title: 'chapter_one.transacting_three.title',
  key: 'CH1TRA3',
}

export default function Transacting3({ lang }) {
  const t = useTranslations(lang)

  return (
    <TerminalChallenge
      expectedInput="44697374726963742032312c20426974636f696e2046726565646f6d205a6f6e65"
      saveInfo={{
        chapter: 'chapter-1',
        challenge: 'outro-1',
      }}
      successMessage={t(
        'chapter_one.transacting_three.terminal_challenge_success'
      )}
      customLines={t('chapter_one.transacting_three.terminal_challenge_lines')}
      commonError={{
        error: '$scriptPubKeyBytes',
        message: t('chapter_one.transacting_three.terminal_challenge_error'),
      }}
    >
      <LessonInfo>
        <Title>{t('chapter_one.transacting_three.heading')}</Title>

        <Text className="mt-2 text-lg md:text-xl">
          {t('chapter_one.transacting_three.paragraph_one')}
        </Text>

        <Text className="mt-2 text-lg md:text-xl">
          {t('chapter_one.transacting_three.paragraph_two')}
        </Text>

        <CodeExample
          className="mt-4"
          code="echo $scriptPubKeyBytes | xxd -r -p"
          language="shell"
          copy
        />

        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_one.transacting_three.paragraph_three')}
        </Text>

        <div className="mt-4 flex">
          <Button
            size="small"
            href="https://blockstream.info/tx/ee3b8caaeb58245338dd299467de89ec6833d2a4235493c95059934603b5e98d?expand"
            external={true}
            classes="w-full md:auto"
          >
            {t('chapter_one.transacting_three.link')}
          </Button>
        </div>
      </LessonInfo>
    </TerminalChallenge>
  )
}
