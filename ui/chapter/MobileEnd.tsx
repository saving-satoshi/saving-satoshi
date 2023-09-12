'use client'

import { Button } from 'shared'
import { useTranslations } from 'hooks'

import { keys } from 'lib/progress'
import Image from 'next/image'

export default function MobileEnd({
  image,
  lang,
  children,
  theme,
  account,
  onClick,
  currentLessonKey,
  gradientTheme,
}: {
  children: any
  image: string
  lang: string
  theme: string
  account: any
  onClick: any
  currentLessonKey: any
  gradientTheme: string
}) {
  const t = useTranslations(lang)

  return (
    <div className={`-mt-[70px] min-h-screen ${theme}`}>
      <Image
        src={image}
        alt={t('chapter_two.title')}
        width={0}
        height={0}
        sizes="100vw"
        quality={100}
        loading="eager"
        priority
        className="h-[600px] w-auto object-cover"
      />
      <div
        className={`relative bottom-56 bg-gradient-to-t ${gradientTheme} pb-32`}
      />
      <div
        className={`absolute top-[500px] px-4 pb-12 md:p-16 ${theme} w-screen`}
      >
        <div className="max-w-[500px]">{children}</div>
        <div className="mt-4 flex w-full max-w-[500px] flex-col gap-4 xl:w-2/3">
          <Button onClick={onClick} size="small">
            {(!account && t('chapter_one.end.save')) ||
              (account && t('shared.next'))}
          </Button>
          {keys[keys.length - 1] === currentLessonKey && (
            <Button
              href="https://forms.gle/WhdJwcKKetB9sFL79"
              external
              style="outline"
              size="small"
            >
              {t('chapter_one.end.feedback')}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
