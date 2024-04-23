'use client'

import { useTranslations, useProceed } from 'hooks'
import { ChapterIntro } from 'ui'
import { Button } from 'shared'

export const metadata = {
  title: 'chapter_four.public_key_one.title',
  navigation_title: 'chapter_four.public_key_one.nav_title',
  key: 'CH4PKY1',
}

export default function PublicKey1({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro
      className="my-8"
      heading={t('chapter_four.public_key_one.heading')}
    >
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_four.public_key_one.paragraph_one')}
      </p>
      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_four.public_key_one.paragraph_two')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_four.public_key_one.paragraph_three')}
      </p>
      <ul className="list-disc pl-5">
        <li className="mt-2 text-lg md:text-xl">
          {t('chapter_four.public_key_one.list_one')}
        </li>
        <li className="mt-2 text-lg md:text-xl">
          {t('chapter_four.public_key_one.list_two')}
        </li>
      </ul>
      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_four.public_key_one.paragraph_four')}
      </p>

      <Button onClick={proceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
