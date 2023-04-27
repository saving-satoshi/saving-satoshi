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
    <div className="w-full bg-[#2A3B61]">
      <Topbar />

      <Image
        src="/assets/images/error-page_cat.jpg"
        alt="page not found"
        width={250}
        height={250}
        className="absolute top-1/4 left-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 flex-col justify-center"
      />
      <div className="absolute top-1/2 left-1/2 z-0 flex w-screen -translate-x-1/2 -translate-y-1/2 flex-col justify-center">
        <h1 className=" text-center font-cbrush text-6xl text-white">
          {t('error.first')}
        </h1>
        <h1 className="text-center font-cbrush text-4xl text-white">
          {t('error.second')}
        </h1>

        <div className=" mt-8 text-center font-cbrush text-2xl">
          <Button href="/">{t('error.back_safety')}</Button>
        </div>
      </div>
    </div>
  )
}
