'use client'

import Image from 'next/image'
import { Button } from 'shared'
import { useTranslations } from 'hooks'
import { setUserProgress } from 'lib/user'
import { useRouter } from 'next/navigation'

export default function TextImageDisplay({
  children,
  lang,
  imageSrc,
  imageAlt,
  btnText,
  btnEnabled,
  next,
  saveInfo,
}: {
  children: any
  lang: any
  imageSrc: string
  imageAlt: string
  btnText?: string
  btnEnabled: boolean
  next: string
  saveInfo?: any
}) {
  const router = useRouter()
  const t = useTranslations(lang)

  function saveProgress() {
    if (saveInfo) {
      setUserProgress(saveInfo.chapter, saveInfo.challenge)
    }
    router.replace(next)
  }

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
                <Button classes="w-full md:w-auto" onClick={saveProgress}>
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
