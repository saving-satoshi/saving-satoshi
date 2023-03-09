'use client'

import Image from 'next/image'
import { Button } from 'shared'
import { chapters } from 'content'
import { introductions } from 'content'
import { redirect, usePathname } from 'next/navigation'
import { useTranslations } from 'hooks'

export default function Introduction({ children, lang }) {
  const t = useTranslations(lang)
  const chapterId = usePathname().split('/').pop()
  const chapter = chapters[chapterId]

  if (!chapter) {
    return redirect('/chapters')
  }

  const intro = introductions[chapter.metadata.intro]

  return (
    <div className="flex grow">
      <div className="lg:flex lg:grow">
        <div className="relative h-[375px] overflow-hidden lg:order-last lg:flex lg:h-full lg:shrink lg:basis-1/2 lg:border-l lg:border-white/25">
          <Image
            src={intro.metadata.image}
            alt={t(intro.metadata.title)}
            fill
            objectFit="cover"
            objectPosition="bottom"
            className="relative"
          />
        </div>
        <div className="flex shrink basis-1/2">
          <div className="flex flex-col gap-10 px-[15px] py-10 lg:px-10">
            <div className="intro text-white">{children}</div>
            <div>
              {chapter.metadata.lessons.length > 0 ? (
                <Button
                  href={`/chapters/${chapterId}/${chapter.metadata.lessons[0]}`}
                  classes="w-full md:w-auto"
                >
                  Start
                </Button>
              ) : (
                <Button classes="w-full md:w-auto" disabled>
                  Coming soon
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
