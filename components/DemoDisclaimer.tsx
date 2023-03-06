'use client'

import { useLang, useTranslations } from 'hooks'

export default function DemoDisclaimer() {
  const lang = useLang()
  const t = useTranslations(lang)

  return (
    <div className="mx-4 mb-0 flex flex-col gap-2 border border-dashed border-white p-5 lg:mx-auto lg:mb-20 lg:w-9/12 2xl:w-1/2">
      <h3 className="font--cbrush text-center text-4xl text-white">
        {t('demo_disclaimer.title')}
      </h3>
      <p className="text-center font-nunito text-lg text-white">
        {t('demo_disclaimer.description')}
      </p>
    </div>
  )
}
