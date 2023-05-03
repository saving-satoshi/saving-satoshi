'use client'
import { Button } from 'shared'
import Topbar from 'components/Topbar'
import Image from 'next/image'
import { useTranslations, useLang } from 'hooks'

export default function NotFound() {
  const lang = useLang()
  const t = useTranslations(lang)

  return (
    <div className="flex h-full grow items-end justify-center">
      <Image
        src="/assets/images/404-background.jpg"
        alt="page not found"
        fill
        quality={100}
        loading="eager"
        priority
        className="-z-20 h-full w-full object-cover"
      />
      <Topbar />
      <div className="flex h-screen flex-col justify-center">
        <Image
          src="/assets/images/404-cat.png"
          alt="cat"
          className="flex self-center"
          width={250}
          height={253.65}
        />

        <div className="flex flex-col justify-center">
          <h1 className=" text-center font-cbrush text-6xl text-white md:text-6xl">
            {t('notfound.first')}
          </h1>
          <h2 className="text-center font-cbrush text-4xl text-white md:text-4xl">
            {t('notfound.second')}
          </h2>
          <h2 className="text-center font-cbrush text-4xl text-white md:text-4xl">
            {t('notfound.third')}
          </h2>

          <div className=" mt-8 w-full text-center font-cbrush text-2xl md:w-auto">
            <Button href="/">{t('notfound.back_safety')}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
