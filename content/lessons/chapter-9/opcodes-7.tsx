'use client'

import { useTranslations } from 'hooks'
import Image from 'next/image'
import { ChapterIntro } from 'ui'
import { Button } from 'shared'
import { useProceed } from 'hooks'

export const metadata = {
  title: 'chapter_nine.opcodes_seven.title',
  navigation_title: 'chapter_nine.opcodes_seven.nav_title',
  key: 'CH9OPC7',
}

export default function OpCodes7({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro
      className="my-8"
      heading={t('chapter_nine.opcodes_seven.heading')}
    >
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_nine.opcodes_seven.paragraph_one')}
      </p>

      <p className="mt-4 text-lg md:text-xl">
        {t('chapter_nine.opcodes_seven.paragraph_two')}
      </p>

      <div className="mt-4 inline-flex flex-row gap-5 rounded-2xl bg-black/15 p-5">
        <div className="relative">
          <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full">
            <Image
              src="/assets/images/chapter-1-holocat.jpg"
              alt="Holocat"
              width={150}
              height={170}
              className="absolute left-[-5px] top-0 h-auto max-h-none w-auto max-w-none"
              quality={100}
            />
          </div>
        </div>
        <p className="text-base md:text-lg">
          {t('chapter_nine.opcodes_seven.paragraph_three')}
        </p>
      </div>

      <Button onClick={proceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
