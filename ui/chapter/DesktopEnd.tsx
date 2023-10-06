'use client'

import { Button } from 'shared'
import { useTranslations } from 'hooks'
import { keys } from 'lib/progress'
import clsx from 'clsx'
import Image from 'next/image'

export default function DesktopEnd({
  image,
  lang,
  children,
  className,
  direction,
  theme,
  account,
  onClick,
  currentLessonKey,
}: {
  children: any
  className?: string
  image: string
  lang: string
  direction: 'left' | 'right'
  theme: string
  account: any
  onClick: any
  currentLessonKey: any
}) {
  const t = useTranslations(lang)

  return (
    <div className={`-mt-[70px] min-h-screen ${theme}`}>
      <Image
        src={image}
        alt={t('chapter_two.title')}
        fill
        quality={100}
        loading="eager"
        priority
        className="object-cover"
      />

      <div
        className={clsx(
          className,
          'absolute bottom-0 ml-auto w-full bg-gradient-to-b from-transparent via-[#00000040] to-[#00000080] p-4 pb-12 text-left md:p-16'
        )}
      >
        <div
          className={clsx('max-w-[500px]', {
            'float-left': direction === 'left',
            'float-right': direction === 'right',
          })}
        >
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
      </div>
    </div>
  )
}
