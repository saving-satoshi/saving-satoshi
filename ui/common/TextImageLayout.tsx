'use client'

import Image from 'next/image'
import { Button } from 'shared'
import { useSaveAndProceed, useTranslations } from 'hooks'
import { useEffect } from 'react'

export default function TextImageDisplay({
  children,
  lang,
  imageSrc,
  imageAlt,
  btnText,
  btnEnabled,
}: {
  children: any
  lang: any
  imageSrc: string
  imageAlt: string
  btnText?: string
  btnEnabled: boolean
}) {
  const t = useTranslations(lang)
  const saveAndProceed = useSaveAndProceed()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex grow">
      <div className="lg:flex lg:grow">
        <div className="relative h-[375px] overflow-hidden lg:order-last lg:flex lg:h-full lg:shrink lg:basis-1/2 lg:border-l lg:border-white/25">
          <Image
            src={imageSrc}
            alt={t(imageAlt)}
            fill
            className="relative object-cover object-bottom"
          />
        </div>
        <div className="flex shrink basis-1/2">
          <div className="flex flex-col gap-10 px-[15px] py-11 lg:px-10">
            <div className="intro text-white">
              <div className="font-nunito text-xl">{children}</div>
            </div>
            <div>
              {btnEnabled ? (
                <Button onClick={saveAndProceed} classes="w-full md:w-auto">
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
