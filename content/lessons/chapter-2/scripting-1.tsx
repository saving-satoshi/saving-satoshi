'use client'

import { useProceed, useTranslations } from 'hooks'
import { ChapterIntro, Text } from 'ui'
import { Button } from 'shared'

export const metadata = {
  title: 'chapter_two.scripting_one.title',
  navigation_title: 'chapter_two.scripting_one.nav_title',
  key: 'CH2SCR1',
}

export default function Scripting1({ lang }) {
  const t = useTranslations(lang)
  const proceed = useProceed()

  return (
    <ChapterIntro
      className="fade-in my-8"
      heading={t('chapter_two.scripting_one.heading')}
    >
      <Text className="mt-2 text-lg md:text-xl">
        {t('chapter_two.scripting_one.paragraph_one')}
      </Text>
      <Text className="my-8 text-lg md:text-xl">
        {t('chapter_two.scripting_one.paragraph_two')}
      </Text>
      <Text className="inline text-lg md:text-xl">
        {t('chapter_two.scripting_one.paragraph_three')}{' '}
      </Text>
      {t('chapter_two.scripting_one.tooltip_one.highlighted')}.
      <Text className="mt-8 text-lg md:text-xl">
        {t('chapter_two.scripting_one.paragraph_four')}
      </Text>
      <Button onClick={proceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
