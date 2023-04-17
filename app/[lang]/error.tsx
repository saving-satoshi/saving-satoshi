'use client'

import { useEffect } from 'react'
import Topbar from 'components/Topbar'
import Image from 'next/image'
import { useTranslations, useLang } from 'hooks'
import { Button } from 'shared'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  const lang = useLang()
  const t = useTranslations(lang)

  useEffect(() => {
    //Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex h-full grow items-end justify-center">
      <Image
        src="/assets/images/404.jpg"
        alt="page not found"
        fill
        quality={100}
        loading="eager"
        priority
        className="-z-20 h-full w-full object-cover"
      />

      <Topbar />
      <div className="absolute top-1/2 left-1/2 z-0 flex w-screen -translate-x-1/2 -translate-y-1/2 flex-col justify-center">
        <h1 className=" text-center font-cbrush text-6xl text-white">
          {t('error.first')}
        </h1>
        <h1 className="text-center font-cbrush text-4xl text-white">
          {t('error.second')}
        </h1>
        <h1 className="text-center font-cbrush text-4xl text-white">
          {t('error.third')}
        </h1>

        <div className=" mt-8 text-center font-cbrush text-2xl">
          <Button href="/">{t('error.back_safety')}</Button>
        </div>
      </div>
    </div>
  )
}
