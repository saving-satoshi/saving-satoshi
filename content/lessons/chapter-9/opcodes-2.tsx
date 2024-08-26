'use client'

import { useTranslations } from 'hooks'
import { ChapterIntro } from 'ui'
import { Button } from 'shared'
import { useProceed } from 'hooks'

export const metadata = {
  title: 'chapter_nine.opcodes_two.title',
  navigation_title: 'chapter_nine.opcodes_two.nav_title',
  key: 'CH9OPC2',
}

export default function OpCodes2({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro
      className="my-8"
      heading={t('chapter_nine.opcodes_two.heading')}
    >
      <p className="mt-4 text-lg md:text-xl">
        {t('chapter_nine.opcodes_two.paragraph_one')}
      </p>

      <p className="mt-4 text-lg md:text-xl">
        {t('chapter_nine.opcodes_two.paragraph_two')}
      </p>

      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_nine.opcodes_two.paragraph_three')}
      </p>

      <p className="mt-4 text-lg md:text-xl">
        {t('chapter_nine.opcodes_two.subheading_one')}
      </p>
      <ul className="mt-2 list-inside list-disc">
        <li>{t('chapter_nine.opcodes_two.stack_list_one')}</li>
        <li>{t('chapter_nine.opcodes_two.stack_list_two')}</li>
        <li>{t('chapter_nine.opcodes_two.stack_list_three')}</li>
        <li>{t('chapter_nine.opcodes_two.stack_list_four')}</li>
      </ul>
      <p className="mt-4 text-lg md:text-xl">
        {t('chapter_nine.opcodes_two.paragraph_four')}
      </p>

      <p className="mt-4 text-lg md:text-xl">
        {t('chapter_nine.opcodes_two.paragraph_five')}
      </p>

      <Button onClick={proceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
