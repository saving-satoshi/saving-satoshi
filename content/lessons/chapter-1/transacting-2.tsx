'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { LessonInfo, Text, Title } from 'ui'
import { InputChallenge } from 'ui'

export default function Transacting2({ lang }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <InputChallenge
      answer="5361746f7368693433335061726b53744368696e6f43413933323433"
      next={`${routes.chaptersUrl}/chapter-1/transacting-3`}
      label={t('chapter_one.transacting_two.input_challenge_label')}
      pattern={/[a-z0-9]+/gi}
      precedingText="OP_RETURN OP_PUSHBYTES_28"
      hints
    >
      <LessonInfo>
        <Title>{t('chapter_one.transacting_two.heading')}</Title>

        <Text className="mt-2 text-lg">
          {t('chapter_one.transacting_two.paragraph_one')}
        </Text>

        <Text className="mt-2 text-lg">
          {t('chapter_one.transacting_two.paragraph_two')}
        </Text>

        <Text className="mt-2 text-lg">
          {t('chapter_one.transacting_two.paragraph_three')}
        </Text>

        <Text className="mt-2 text-lg">
          {t('chapter_one.transacting_two.paragraph_four')}
        </Text>

        <Text className="mt-2 text-lg">
          {t('chapter_one.transacting_two.paragraph_five')}
        </Text>
      </LessonInfo>
    </InputChallenge>
  )
}

export const metadata = {
  title: 'chapter_one.transacting_two.title',
}
