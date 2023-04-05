'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { Button, ChapterIntro } from 'ui'

export default function Hashing1({ lang }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <ChapterIntro>
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_two.hashing_one.paragraph_one')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_one.paragraph_two')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_one.paragraph_three')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_one.paragraph_four')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_one.paragraph_five')}
      </p>

      <Button
        href={`${routes.chaptersUrl}/chapter-2/hashing-2`}
        classes="mt-10 max-md:w-full"
      >
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}

export const metadata = {
  title: 'chapter_two.hashing_one.title',
}
