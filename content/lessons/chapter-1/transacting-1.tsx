'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { Button, ChapterIntro } from 'ui'

export default function Transacting1({ lang }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <ChapterIntro heading={t('transacting_one.heading')}>
      <p className="mt-2 text-lg md:text-xl">
        {t('transacting_one.paragraph_one')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('transacting_one.paragraph_two')}
      </p>

      <Button
        href={`${routes.chaptersUrl}/chapter-1/transacting-2`}
        classes="mt-10 max-md:w-full"
      >
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}

export const metadata = {
  title: 'transacting_one.title',
}
