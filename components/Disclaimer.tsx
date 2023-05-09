'use client'

import { useLang, useTranslations } from 'hooks'

export default function Disclaimer() {
  const lang = useLang()
  const t = useTranslations(lang)

  return (
    <div>
      <div className="flex flex-col justify-center text-white">
        <h1 className="px-2.5 pt-20 text-center text-6xl sm:text-7xl lg:text-8xl">
          {t('shared.chapters')}
        </h1>

        <p className="pb-2.5 pl-10 pr-10 pt-4 text-center text-2xl sm:text-3xl lg:text-4xl">
          {t('chapter.description')}
        </p>
      </div>

      <div className="mx-4 mb-0 lg:mx-auto lg:mb-20 lg:w-9/12 2xl:w-1/2">
        <p className="text-center font-nunito text-lg text-white">
          {t('disclaimer.description')}
        </p>
      </div>
    </div>
  )
}
