'use client'

import { useSaveAndProceed, useTranslations } from 'hooks'
import { Button, ChapterIntro } from 'ui'

export const metadata = {
  title: 'chapter_one.transacting_one.title',
  key: 'CH1TRA1',
}

export default function Transacting1({ lang }) {
  const t = useTranslations(lang)
  const saveAndProceed = useSaveAndProceed()

  return (
    <ChapterIntro heading={t('chapter_one.transacting_one.heading')}>
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_one.transacting_one.paragraph_one')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_one.transacting_one.paragraph_two')}
      </p>

      <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
