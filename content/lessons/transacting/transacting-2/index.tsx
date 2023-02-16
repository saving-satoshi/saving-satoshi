'use client'

import { useTranslations } from 'hooks'
import { Button, LessonInfo, CodeExample, Text, Title } from 'ui'
import { InputChallenge } from 'ui'

export default function Transacting2({ lang }) {
  const t = useTranslations(lang)

  return (
    <InputChallenge
      answer={'6a127461636f7320666f722065766572796f6e65'}
      next={'/chapters/chapter-1/transacting-3'}
      label={t('transacting_two.inputChallengeLabel')}
      pattern={/[a-z0-9]+/gi}
      hints
    >
      <LessonInfo>
        <Title>{t('transacting_two.heading')}</Title>

        <Text className="text-lg">{t('transacting_two.paragraph_one')}</Text>

        <CodeExample
          code={
            '75764fd0c95b4c17b728d10f7555509adfc0789ddc47683c45aeddd1c34727f8'
          }
          language={'string'}
        />

        <Button
          href="https://blockstream.info/tx/75764fd0c95b4c17b728d10f7555509adfc0789ddc47683c45aeddd1c34727f8?expand"
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
