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
        <div className="lg:order-last lg:flex lg:shrink lg:basis-1/2 lg:border-l lg:border-white/25">
          <Image
            src={intro.metadata.image}
            alt={t(intro.metadata.title)}
            width={600}
            height={600}
            className="w-full object-cover"
          />
        </div>
        <div className="flex shrink basis-1/2">
          <div className="flex flex-col gap-10 px-[15px] py-10 lg:px-10">
            <div className="intro text-white">
              <h1 className="font-cbrush text-5xl">
                {t(intro.metadata.title)}
              </h1>
              <h2 className="pt-3 font-nunito text-xl font-black">
                {t(intro.metadata.subtitle)}
              </h2>
              <div className="pt-3 font-nunito text-2xl">{children}</div>
            </div>
            <div>
              {chapter.metadata.lessons.length > 0 ? (
                <Button
                  href={`/chapters/${chapterId}/${chapter.metadata.lessons[0]}`}
                  classes="w-full sm:w-auto"
                >
                  Start
                </Button>
              ) : (
                <Button classes="w-full sm-w-auto" disabled>
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
