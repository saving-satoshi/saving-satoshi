'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { Button } from 'shared'
import { useProceed, useTranslations } from 'hooks'
import { useEffect } from 'react'

export default function TextImageDisplay({
  children,
  lang,
  imageSrc,
  imageAlt,
  btnText,
  btnEnabled,
  objectPosition = 'object-bottom',
}: {
  children: any
  lang: string
  imageSrc: string | React.ReactNode
  imageAlt: string
  btnText?: string
  btnEnabled: boolean
  objectPosition?: string
}) {
  const t = useTranslations(lang)
  const proceed = useProceed()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex grow">
      <div className="lg:flex lg:grow">
        <div className="relative h-[375px] lg:order-last lg:flex lg:h-full lg:shrink lg:basis-1/2 lg:border-l lg:border-white/25">
          {typeof imageSrc === 'string' ? (
            <Image
              src={imageSrc}
              alt={t(imageAlt)}
              fill
              className={clsx('relative object-cover', objectPosition)}
            />
          ) : (
            imageSrc
          )}
        </div>
        <div className="flex shrink basis-1/2 overflow-y-auto">
          <div className="flex flex-col gap-10 px-[15px] py-11 lg:px-10">
            <div className="intro text-white">
              <div className="font-nunito text-xl">{children}</div>
            </div>
            <div>
              {btnEnabled ? (
                <Button onClick={proceed} classes="w-full md:w-auto">
                  {btnText ? btnText : t('shared.next')}
                </Button>
              ) : (
                <Button classes="w-full md:w-auto" disabled>
                  {t('shared.coming_soon')}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
