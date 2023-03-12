'use client'
import { useTranslations } from 'hooks'
import { Button, ChapterIntro } from 'ui'

export default function Genesis2({ lang }) {
  const t = useTranslations(lang)

  return (
    <ChapterIntro heading={t('genesis_one.heading')}>
      <p className="mt-2 text-lg md:text-xl">
        {t('genesis_one.paragraph_one')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('genesis_one.paragraph_two')}
      </p>

      <Button
        href="/chapters/chapter-1/genesis-2"
        classes="mt-10 max-md:w-full"
      >
        {t('shared.start')}
      </Button>
    </ChapterIntro>
  )
}

export const metadata = {
  title: 'genesis_one.title',
}
