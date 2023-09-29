'use client'

import { useSaveAndProceed, useTranslations } from 'hooks'
import { ChapterIntro, CodeExample } from 'ui'

import { Button } from 'shared'

export const metadata = {
  title: 'chapter_four.public_key_five.title',
  key: 'CH4PKY5',
}

export default function PublicKey5({ lang }) {
  const saveAndProceed = useSaveAndProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro
      className="my-8"
      heading={t('chapter_four.public_key_five.heading')}
    >
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_four.public_key_five.paragraph_one')}
      </p>
      <CodeExample
        className="mt-4"
        code={`038906fa0dea4bd3d15585c3c63c0bb7303295a1a8f8086520a5cff9fbf2f363ab`}
        language="shell"
      />
      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_four.public_key_five.paragraph_two')}
      </p>
      <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
