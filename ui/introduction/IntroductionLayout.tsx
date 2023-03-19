'use client'

import Image from 'next/image'
import { Button } from 'shared'
import { useContentRoute, useTranslations } from 'hooks'

export default function IntroductionLayout({
  children,
  lang,
  image,
  title,
  next,
  nextStatus,
}: {
  children: any
  lang: any
  image: any
  title: any
  next: any
  nextStatus: boolean
}) {
  const t = useTranslations(lang)

  const { handleNextPathProgress } = useContentRoute()

  return (
    <div className="flex grow">
      <div className="lg:flex lg:grow">
        <div className="relative h-[375px] overflow-hidden lg:order-last lg:flex lg:h-full lg:shrink lg:basis-1/2 lg:border-l lg:border-white/25">
          <Image
            src={image}
            alt={t(title)}
            fill
            objectFit="cover"
            objectPosition="bottom"
            className="relative"
          />
        </div>
        <div className="flex shrink basis-1/2">
          <div className="flex flex-col gap-10 px-[15px] py-10 lg:px-10">
            <div className="intro text-white">
              <div className="pt-3 font-nunito text-2xl">{children}</div>
            </div>
            <div>
              {nextStatus ? (
                <Button
                  href={next}
                  classes="w-full md:w-auto"
                  onClick={handleNextPathProgress(next)}
                >
                  {t('shared.next')}
                </Button>
              ) : (
                <Button
                  classes="w-full md:w-auto"
                  disabled
                  onClick={handleNextPathProgress(next)}
                >
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
