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
    <div className="flex h-screen flex-col justify-center bg-gradient-to-br from-[#0A1B2A] to-[#2A323C]">
      <Topbar />
      <Image
        src="/assets/images/error-page_cat.jpg"
        alt="something went wrong"
        width={250}
        height={250}
        className="flex self-center rounded-full"
      />
      <div className="flex flex-col justify-center">
        <h1 className=" text-center font-cbrush text-5xl text-white md:text-6xl">
          {t('error.first')}
        </h1>
        <h2 className="text-center font-cbrush text-2xl text-white md:text-4xl">
          {t('error.second')}
        </h2>

        <div className=" mt-8 w-full text-center font-cbrush text-2xl md:w-auto">
          <Button onClick={() => window.location.reload()}>
            {t('error.reload')}
          </Button>
        </div>
      </div>
    </div>
  )
}
