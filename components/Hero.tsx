'use client'

import { Button } from 'shared'
import { useLang, useLocalizedRoutes, useTranslations } from 'hooks'
import Image from 'next/image'
import { getChapterKey, keys } from 'lib/progress'
import { accountAtom, progressAtom } from 'state/state'
import { useAtom } from 'jotai'

export default function Hero() {
  const { chaptersUrl, aboutUrl } = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)
  const [progress] = useAtom(progressAtom)
  const [account] = useAtom(accountAtom)

  const chapterKey = progress !== keys[0] ? getChapterKey(progress) : ''

  return (
    <div className="flex h-full grow items-end justify-center">
      <Image
        src="/assets/images/main-image.jpg"
        alt="Saving Satoshi"
        fill
        quality={100}
        loading="eager"
        priority
        className="-z-20 h-full w-full object-cover"
      />
      <div className="flex w-screen flex-col justify-center bg-gradient-to-b from-transparent via-[#00000040] to-[#00000080] px-5 pt-5 font-cbrush text-white md:p-10">
        <h1 className="-mx-3 text-center text-6xl sm:text-7xl lg:text-8xl">
          {t('hero.title')}
        </h1>
        <p className="px-8 pt-2 text-center text-2xl sm:text-3xl md:pt-5 lg:text-4xl">
          {t('hero.description')}
        </p>
        <div className="grid grid-cols-1 justify-center pb-2 pt-5 sm:pb-8 md:grid-cols-2 md:space-x-5 md:pt-8">
          <div className="flex items-center justify-center md:justify-end">
            <Button
              classes="text-xl md:!w-64 w-full"
              href={account ? `${chaptersUrl}#${chapterKey}` : chaptersUrl}
            >
              {t('hero.start_journey')}
            </Button>
          </div>
          <div className="flex justify-center pt-5 md:justify-start md:pt-0">
            <Button
              classes="text-xl md:!w-64 w-full"
              href={aboutUrl}
              style="outline"
            >
              {t('hero.tell_more')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
