'use client'

import { Button } from 'shared'
import { useTranslations } from 'hooks'

import { keys } from 'lib/progress'
import Image from 'next/image'

export default function MobileEnd({
  image,
  lang,
  children,
  className,
  account,
  onClick,
  currentLessonKey,
  gradientTheme,
}: {
  children: any
  image: string
  lang: string
  className?: string
  account: any
  onClick: any
  currentLessonKey: any
  gradientTheme: string
}) {
  const t = useTranslations(lang)

  return (
    <div className={className}>
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
        className={`relative bottom-48 bg-gradient-to-t ${gradientTheme} pb-48`}
      />
      <div className="relative bottom-64 z-10 max-w-[500px] p-4 pb-12 md:p-16">
        {children}
        <div className="mt-4 flex w-full flex-col gap-4 xl:w-2/3">
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
      <div className="ml-auto w-full bg-gradient-to-b from-transparent via-[#00000040] to-[#00000080] p-4 pb-12 text-left md:p-16" />
    </div>
  )
}
