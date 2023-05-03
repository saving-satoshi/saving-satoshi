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
    <div className="flex h-screen flex-col justify-center">
      <Image
        src="/assets/images/error-page_cat.jpg"
        alt="page not found"
        width={250}
        height={250}
        className="flex self-center"
      />
      <div className="flex flex-col justify-center">
        <h1 className=" text-center font-cbrush text-6xl text-white">
          {t('error.first')}
        </h1>
        <h1 className="text-center font-cbrush text-4xl text-white">
          {t('error.second')}
        </h1>

        <div className=" mt-8 w-full text-center font-cbrush text-2xl md:w-auto">
          <Button href="/">{t('error.back_safety')}</Button>
        </div>
      </div>
    </div>
  )
}
