'use client'

import { useLang, useTranslations } from 'hooks'

export default function Disclaimer() {
  const lang = useLang()
  const t = useTranslations(lang)

  return (
    <div className="mx-4 mb-0 lg:mx-auto lg:mb-20 lg:w-9/12 2xl:w-1/2">
      <p className="text-center font-nunito text-lg text-white">
        {t('disclaimer.description')}
      </p>
    </div>
  )
}
