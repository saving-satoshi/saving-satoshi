'use client'

import { Button } from 'shared'
import { useLang, useTranslations } from 'hooks'

export default function Hero() {
  const lang = useLang()
  const t = useTranslations(lang)

  return (
    <div className="homepage-img -mt-20 flex grow items-end justify-center bg-cover bg-fixed bg-[-10em] md:bg-[0]">
      <div className="flex w-screen flex-col justify-center bg-gradient-to-b from-back/0 to-back/100 p-10 font-cbrush text-white">
        <h1 className="text-center text-6xl sm:text-7xl lg:text-8xl">
          {t('hero.title')}
        </h1>
        <p className="text-center text-2xl sm:text-3xl lg:text-4xl">
          {t('hero.description')}
        </p>
        <div className="flex grid grid-cols-1 justify-center pt-8  pb-2 sm:pb-10 md:grid-cols-2 md:space-x-5">
          <div className="flex items-center justify-center sm:justify-end">
            <Button href="/chapters">{t('hero.start_journey')}</Button>
          </div>
          <div className="flex justify-center pt-4 sm:justify-start md:pt-0">
            <Button href="/about" style="outline">
              {t('hero.tell_more')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
