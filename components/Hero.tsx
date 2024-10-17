'use client'

import clsx from 'clsx'
import { Button } from 'shared'
import { useLang, useLocalizedRoutes, useTranslations } from 'hooks'
import { unstable_getImgProps as getImgProps } from 'next/image'
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

  const common = { alt: 'Saving Satoshi Hero', fill: true, quality: 92 }
  const {
    props: { srcSet: tall },
  } = getImgProps({
    ...common,
    src: '/assets/images/main-image-mobile-tall.jpg',
  })
  const {
    props: { srcSet: mobile },
  } = getImgProps({ ...common, src: '/assets/images/main-image-mobile.jpg' })
  const {
    props: { srcSet: tablet },
  } = getImgProps({ ...common, src: '/assets/images/main-image-tablet.jpg' })
  const {
    props: { srcSet: desktop, ...rest },
  } = getImgProps({ ...common, src: '/assets/images/main-image.jpg' })
  const {
    props: { srcSet: wide },
  } = getImgProps({ ...common, src: '/assets/images/main-image-wide.jpg' })

  return (
    <div className="flex h-full grow items-end justify-center">
      <picture className="hero-image-position absolute -z-20 h-full w-full object-cover">
        <source media="(max-aspect-ratio: 3/5)" srcSet={tall} />
        <source media="(max-aspect-ratio: 1)" srcSet={mobile} />
        <source media="(max-aspect-ratio: 13/10)" srcSet={tablet} />
        <source media="(min-aspect-ratio: 2)" srcSet={wide} />
        <img
          loading="eager"
          srcSet={desktop}
          alt="Saving Satoshi Hero"
          className="hero-image-position absolute -z-20 h-full w-full object-cover"
        />
      </picture>
      <div className="fixed bottom-0 mb-16 flex w-screen flex-col justify-center bg-gradient-to-b from-transparent to-[#00000080] px-5 pt-5 font-cbrush text-white md:p-10 slim:mb-11">
        <p className="px-8 pt-2 text-center font-nunito text-2xl sm:text-3xl md:pt-5 lg:text-4xl">
          {t('hero.description')}
        </p>
        <div
          className={clsx(
            'grid grid-cols-1 justify-center pb-8 pt-6 md:space-x-5 md:pt-8',
            {
              'md:grid-cols-1': account,
              'md:grid-cols-2': !account,
            }
          )}
        >
          <div
            className={clsx('flex items-center justify-center', {
              'md:justify-end': !account,
            })}
          >
            <Button
              classes={
                account ? 'text-xl md:!w-96 w-full' : 'text-xl md:!w-64 w-full'
              }
              href={
                account
                  ? `${chaptersUrl}#chapter-${currentChapter}`
                  : chaptersUrl
              }
            >
              {account ? t('shared.next') : t('hero.start_journey')}
            </Button>
          </div>
          {!account && (
            <div className="flex justify-center pt-5 md:justify-start md:pt-0">
              <Button
                classes="text-xl md:!w-64 w-full"
                href={aboutUrl}
                style="outline"
              >
                {t('hero.tell_more')}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
