'use client' // Error components must be Client components

import { Button } from 'shared'
import Topbar from 'components/Topbar'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Tooltip } from 'ui'
import { useTranslations, useLang } from 'hooks'

export default function Error({
  error,
  reset,
  params,
}: {
  error: Error
  reset: () => void
}) {
  const lang = useLang()
  const t = useTranslations(lang)
  const [errorString, setErrorString] = useState('')

  const handleClick = () => {
    window.history.go(-1)
  }

  useEffect(() => {
    console.log(error.toString())
    setErrorString(error.toString())
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
      <div className="absolute top-1/2 left-1/2 z-10 flex w-screen -translate-x-1/2 -translate-y-1/2 flex-col justify-center">
        <h1 className=" text-center font-cbrush text-6xl text-white">
          {t('shared.next')}
        </h1>
        <h1 className="text-center font-cbrush text-4xl text-white">
          It’s not quite clear where we went wrong.
        </h1>
        <h1 className="text-center font-cbrush text-4xl text-white">
          Our solocopter must have crashed (
          <Tooltip
            id={`error-tooltip`}
            position="top"
            offset={360}
            className="relative cursor-pointer underline"
            content={
              <div className="flex flex-col">
                <span className="text-m whitespace-nowrap leading-none text-white/50">
                  Error
                </span>
                <span className="break-all text-sm">{errorString}</span>
              </div>
            }
          >
            The error
          </Tooltip>
          ).
        </h1>
        <div className=" mt-8 text-center font-cbrush text-2xl">
          <Button onClick={handleClick}>Go back</Button>
        </div>
      </div>
    </div>
  )
}
