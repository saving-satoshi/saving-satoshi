'use client'

import { useTranslations } from 'hooks'
import { ChapterIntro } from 'ui'
import { Button } from 'shared'
import { useProceed } from 'hooks'

export const metadata = {
  title: 'chapter_one.genesis_one.title',
  navigation_title: 'chapter_one.genesis_one.nav_title',
  key: 'CH1GEN1',
}

export default function Genesis1({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro
      className="my-8"
      heading={t('chapter_one.genesis_one.heading')}
    >
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_one.genesis_one.paragraph_one')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_one.genesis_one.paragraph_two')}
      </p>

      <Button onClick={proceed} classes="mt-10 max-md:w-full">
        {t('shared.start')}
      </Button>
    </ChapterIntro>
  )
}
