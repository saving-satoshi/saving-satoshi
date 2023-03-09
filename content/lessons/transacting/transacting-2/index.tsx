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

        <Text className="text-lg mt-2">{t('transacting_two.paragraph_one')}</Text>
        <Text className="text-lg mt-2">{t('transacting_two.paragraph_two')}</Text>
        <Text className="text-lg mt-2">{t('transacting_two.paragraph_three')}</Text>
        <Text className="text-lg mt-2">{t('transacting_two.paragraph_four')}</Text>
        <Text className="text-lg mt-2">{t('transacting_two.paragraph_five')}</Text>
      </LessonInfo>
    </InputChallenge>
  )
}

export const metadata = {
  title: 'transacting_two.title',
}
