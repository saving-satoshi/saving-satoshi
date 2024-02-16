'use client'

import { useProceed, useTranslations } from 'hooks'
import { Button } from 'shared'
import { ChapterIntro } from 'ui'

export const metadata = {
  title: 'chapter_five.verify_signature_one.title',
  key: 'CH5VFS1',
}

export default function DeriveMessage1({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro
      className="my-8 text-center"
      heading={t('chapter_five.verify_signature_one.heading')}
    >
      <p className="max-w-[700px] px-[15px] py-[10px] font-nunito text-[22px]">
        {t('chapter_five.verify_signature_one.paragraph_one')}
      </p>

      <Button onClick={proceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
