'use client'

import { useMediaQuery, useTranslations } from 'hooks'
import { TextImage } from 'ui'
import Lottie from 'react-lottie'
import Animation1 from 'public/assets/animations/Animation1.json'

export const metadata = {
  title: 'chapter_four.public_key_two.title',
  image: '/assets/images/chapter-4-elliptic-curve.svg',
  key: 'CH4PKY1',
}

export default function PublicKey1({ lang }) {
  const t = useTranslations(lang)

  const isSmallScreen = useMediaQuery({ width: 1279 })

  const options = {
    loop: false,
    autoplay: true,
    animationData: Animation1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <TextImage
      lang={lang}
      imageSrc={
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-[300px] w-[300px] border border-white/50 xl:h-[600px] xl:w-[600px]">
            <Lottie
              options={options}
              height={isSmallScreen ? 300 : 600}
              width={isSmallScreen ? 200 : 400}
            />
            <hr className="relative top-[-300px] mt-[50px] w-[300px] opacity-25 xl:top-[-600px] xl:mt-[100px] xl:w-[600px]" />
            <hr className="relative top-[-300px] mt-[50px] w-[300px] opacity-25 xl:top-[-600px] xl:mt-[100px] xl:w-[600px]" />
            <hr className="relative top-[-300px] mt-[50px] w-[300px] opacity-25 xl:top-[-600px] xl:mt-[100px] xl:w-[600px]" />
            <hr className="relative top-[-300px] mt-[50px] w-[300px] opacity-25 xl:top-[-600px] xl:mt-[100px] xl:w-[600px]" />
            <hr className="relative top-[-300px] mt-[50px] w-[300px] opacity-25 xl:top-[-600px] xl:mt-[100px] xl:w-[600px]" />
            <hr className="relative left-[-100px] top-[-406px] w-[300px] rotate-90 opacity-25 xl:left-[-200px] xl:top-[-806px] xl:w-[600px]" />
            <hr className="relative left-[-50px] top-[-407px] w-[300px] rotate-90 opacity-25 xl:left-[-100px] xl:top-[-807px] xl:w-[600px]" />
            <hr className="relative left-0 top-[-408px] w-[300px] rotate-90 opacity-25 xl:top-[-808px] xl:w-[600px]" />
            <hr className="relative left-[50px] top-[-409px] w-[300px] rotate-90 opacity-25 xl:left-[100px] xl:top-[-809px] xl:w-[600px]" />
            <hr className="relative left-[100px] top-[-410px] w-[300px] rotate-90 opacity-25 xl:left-[200px] xl:top-[-810px] xl:w-[600px]" />
          </div>
        </div>
      }
      imageAlt={metadata.title}
      btnEnabled={true}
    >
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_four.public_key_two.paragraph_one')}
      </p>
      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_four.public_key_two.paragraph_two')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_four.public_key_two.paragraph_three')}
      </p>
      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_four.public_key_two.paragraph_four')}
      </p>
      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_four.public_key_two.paragraph_five')}
      </p>
    </TextImage>
  )
}
