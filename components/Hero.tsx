'use client'

import { Button } from 'shared'
import { useLang, useLocalizedRoutes, useTranslations } from 'hooks'
import Image from 'next/image'
import { accountAtom } from 'state/state'
import { useAtom, useAtomValue } from 'jotai'
import { currentChapterAtom } from 'state/progressState'
import { useMediaQuery } from 'hooks'
import { useState, useEffect } from 'react'

export default function Hero() {
  const { chaptersUrl, aboutUrl } = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)
  const [account] = useAtom(accountAtom)
  const currentChapter = useAtomValue(currentChapterAtom)

  const [imageMedia, setImageMedia] = useState('/assets/images/main-image.jpg')

  const updateMedia = () => {
    let result = '/assets/images/main-image.jpg'

    if (typeof window !== 'undefined') {
      const aspectRatio = window.innerWidth / window.innerHeight

      if (aspectRatio < 0.6) {
        result = '/assets/images/main-image-mobile-tall.jpg'
      } else if (aspectRatio < 1) {
        result = '/assets/images/main-image-mobile.jpg'
      } else if (aspectRatio < 1.4) {
        result = '/assets/images/main-image-tablet.jpg'
      } else if (aspectRatio >= 2) {
        result = '/assets/images/main-image-wide.jpg'
      }
    }

    setImageMedia(result)
  }

  useEffect(() => {
    updateMedia()
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  return (
    <div className="flex h-full grow items-end justify-center">
      <Image
        src={imageMedia}
        alt="Saving Satoshi"
        fill
        quality={100}
        loading="eager"
        priority
        className="-z-20 h-full w-full object-cover"
        objectPosition="50% 34%"
      />
      <div className="flex w-screen flex-col justify-center bg-gradient-to-b from-transparent to-[#00000080] px-5 pt-5 font-cbrush text-white md:p-10">
        <p className="px-8 pt-2 text-center font-nunito text-2xl sm:text-3xl md:pt-5 lg:text-4xl">
          {t('hero.description')}
        </p>
        <div className="grid grid-cols-1 justify-center pb-8 pt-6 md:grid-cols-2 md:space-x-5 md:pt-8">
          <div className="flex items-center justify-center md:justify-end">
            <Button
              classes="text-xl md:!w-64 w-full"
              href={
                account
                  ? `${chaptersUrl}#chapter-${currentChapter}`
                  : chaptersUrl
              }
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
