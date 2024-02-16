'use client'

import { useProceed, useTranslations } from 'hooks'
import { ChapterIntro } from 'ui'
import { Button } from 'shared'

export const metadata = {
  title: 'chapter_one.transacting_one.title',
  key: 'CH1TRA1',
}

export default function Transacting1({ lang }) {
  const t = useTranslations(lang)
  const proceed = useProceed()

  return (
    <ChapterIntro
      className="my-8"
      heading={t('chapter_one.transacting_one.heading')}
    >
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_one.transacting_one.paragraph_one')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_one.transacting_one.paragraph_two')}
      </p>

      <Button onClick={proceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
