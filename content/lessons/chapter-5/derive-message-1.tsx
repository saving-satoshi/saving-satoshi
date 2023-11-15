'use client'

import { useSaveAndProceed, useTranslations } from 'hooks'
import { Button } from 'shared'
import { ChapterIntro } from 'ui'

export const metadata = {
  title: 'chapter_five.derive_message_one.title',
  image: '/assets/images/chapter-4-intro-1.jpg',
  key: 'CH5DRM1',
}

export default function DeriveMessage1({ lang }) {
  const saveAndProceed = useSaveAndProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro
      className="my-8 text-center"
      heading={t('chapter_five.derive_message_one.heading')}
    >
      <div className="mt-[30px] border-2 border-dashed border-white">
        <p className="max-w-[900px] px-[15px] py-[10px] text-left font-space-mono text-xl md:text-[22px]">
          {t('chapter_five.derive_message_one.code_one')}
          {t('chapter_five.derive_message_one.code_two')}
          {t('chapter_five.derive_message_one.code_three')}
        </p>
      </div>
      <p className="mt-[30px] text-center font-nunito text-2xl font-bold text-white">
        {t('chapter_five.derive_message_one.paragraph_two')}
      </p>

      <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
        {t('shared.start')}
      </Button>
    </ChapterIntro>
  )
}
