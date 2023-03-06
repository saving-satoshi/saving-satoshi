'use client'

import { useTranslations } from 'hooks'
import { Button, LessonInfo, CodeExample, Text, Title } from 'ui'
import { InputChallenge } from 'ui'

export default function Transacting2({ lang }) {
  const t = useTranslations(lang)

  return (
    <InputChallenge
      answer={'6a1c5361746f7368693433335061726b53744368696e6f43413933323433'}
      next={'/chapters/chapter-1/transacting-3'}
      label={t('transacting_two.input_challenge_label')}
      pattern={/[a-z0-9]+/gi}
      hints
    >
      <LessonInfo>
        <Title>{t('transacting_two.heading')}</Title>

        <Text className="text-lg">{t('transacting_two.paragraph_one')}</Text>

        <CodeExample
          code={
            'ee3b8caaeb58245338dd299467de89ec6833d2a4235493c95059934603b5e98d'
          }
          language={'string'}
        />

        <Button
          href="https://blockstream.info/tx/ee3b8caaeb58245338dd299467de89ec6833d2a4235493c95059934603b5e98d?expand"
          external={true}
          classes="mt-4"
        >
          {t('transacting_two.link')}
        </Button>
      </LessonInfo>
    </InputChallenge>
  )
}

export const metadata = {
  title: 'transacting_two.title',
}
