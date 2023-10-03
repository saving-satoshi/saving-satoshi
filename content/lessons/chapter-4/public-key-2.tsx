'use client'

import { useMediaQuery, useTranslations } from 'hooks'
import { TextImage } from 'ui'
import Lottie from 'react-lottie'
import Animation1 from 'public/assets/animations/Animation1.json'
import focusellipse from 'public/assets/images/focus-ellipse.png'
import Circle from 'public/assets/images/circle.svg'
import Arrow from 'public/assets/images/arrow.svg'
import { useEffect, useState } from 'react'
import { sleep } from 'utils'
import Image from 'next/image'

export const metadata = {
  title: 'chapter_four.public_key_two.title',
  key: 'CH4PKY2',
}

export default function PublicKey2({ lang }) {
  const t = useTranslations(lang)
  const [playLottie, setPlayLottie] = useState<boolean>(false)
  const [lottieScreen, setLottieScreen] = useState<number[]>([600, 400])
  const [hiddenPoint, setHiddenPoint] = useState('hidden')
  const [hiddenFocusOne, setHiddenFocusOne] = useState('hidden')
  const [hiddenFocusTwo, setHiddenFocusTwo] = useState('hidden')
  const [hiddenPointText, setHiddenPointText] = useState('hidden')

  const isSmallScreen = useMediaQuery({ width: 1279 })

  const options = {
    loop: false,
    autoplay: playLottie,
    animationData: Animation1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const playAnimation = async () => {
    setPlayLottie(true)

    await sleep(3000)
    setHiddenPoint('fade-in')

    await sleep(2000)
    setHiddenPointText('')

    await sleep(1000)
    setHiddenFocusOne('fade-in')
    await sleep(1000)
    setHiddenFocusTwo('')
  }

  useEffect(() => {
    if (isSmallScreen) {
      setLottieScreen([300, 200])
    } else {
      setLottieScreen([600, 400])
    }
    playAnimation()
  }, [isSmallScreen])

  return (
    <TextImage
      lang={lang}
      imageSrc={
        <div className="flex h-full w-full flex-col items-center justify-center gap-7">
          <div className="mt-8 h-[300px] w-[300px] border border-white/50 xl:h-[600px] xl:w-[600px]">
            <hr className="relative mt-[50px] w-[300px] opacity-25 xl:mt-[100px] xl:w-[600px]" />
            <hr className="relative mt-[50px] w-[300px] opacity-25 xl:mt-[100px] xl:w-[600px]" />
            <hr className="relative mt-[50px] w-[300px] opacity-25 xl:mt-[100px] xl:w-[600px]" />
            <hr className="relative mt-[50px] w-[300px] opacity-25 xl:mt-[100px] xl:w-[600px]" />
            <hr className="relative mt-[50px] w-[300px] opacity-25 xl:mt-[100px] xl:w-[600px]" />
            <hr className="relative left-[-100px] top-[-107px] w-[300px] rotate-90 opacity-25 xl:left-[-200px] xl:top-[-208px] xl:w-[600px]" />
            <hr className="relative left-[-50px] top-[-108px] w-[300px] rotate-90 opacity-25 xl:left-[-100px] xl:top-[-209px] xl:w-[600px]" />
            <hr className="relative left-0 top-[-109px] w-[300px] rotate-90 opacity-25 xl:top-[-210px] xl:w-[600px]" />
            <hr className="relative left-[50px] top-[-110px] w-[300px] rotate-90 opacity-25 xl:left-[100px] xl:top-[-210px] xl:w-[600px]" />
            <hr className="relative left-[100px] top-[-111px] w-[300px] rotate-90 opacity-25 xl:left-[200px] xl:top-[-211px] xl:w-[600px]" />
            <div className="relative left-[25px] top-[-261px] xl:left-[50] xl:top-[-512px]">
              <Lottie
                options={options}
                height={lottieScreen[0]}
                width={lottieScreen[1]}
              />
              <div
                className={`${hiddenPoint} relative left-[-97px] top-[-121px] flex items-center justify-center xl:left-[-196px] xl:top-[-246px]`}
              >
                <div className="absolute">
                  <Circle />
                </div>
                <Image
                  src={focusellipse}
                  alt={'X'}
                  height={30}
                  width={30}
                  className={`${hiddenFocusOne} animate-focus-ping absolute object-center`}
                />
                <Image
                  src={focusellipse}
                  alt={'X'}
                  height={30}
                  width={30}
                  className={`${hiddenFocusTwo} animate-focus-ping absolute object-center`}
                />
              </div>
            </div>
            <div
              className={`${hiddenPointText} fade-in relative left-[6px] top-[-385px] xl:left-[52px] xl:top-[-755px]`}
            >
              <Arrow />
            </div>
            <span
              className={`${hiddenPointText} fade-in relative left-[25px] top-[-390px] font-space-mono text-xl text-white xl:left-[50px] xl:top-[-735px] xl:text-3xl`}
            >
              Generator point G
            </span>
          </div>
          <span className="font-space-mono text-xl text-white xl:text-3xl">
            y^2 = x^2 + 7
          </span>
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
