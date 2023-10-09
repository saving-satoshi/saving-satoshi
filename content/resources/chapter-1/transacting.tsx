'use client'
import { useTranslations, useLang } from 'hooks'

export default function NotFound() {
  const lang = useLang()
  const t = useTranslations(lang)

  return (
    <div className="flex h-full grow items-start justify-center">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center">
          <h1 className=" text-center font-cbrush text-5xl text-white md:text-6xl">
            {t('notfound.first')}
          </h1>
          <h2 className="text-center font-cbrush text-2xl text-white md:text-4xl">
            {t('notfound.second')}
          </h2>
          <h2 className="text-center font-cbrush text-2xl text-white md:text-4xl">
            {t('notfound.third')}
          </h2>
        </div>
      </div>
    </div>
  )
}
