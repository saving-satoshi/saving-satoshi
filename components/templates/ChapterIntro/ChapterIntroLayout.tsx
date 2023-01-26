'use client'

import { BoxButton } from 'components/ui/BoxButton'
import Image from 'next/image'
import {
  allChapters,
  Chapter,
  Introduction,
  allIntroductions,
} from 'contentlayer/generated'

/**
* @slug {string} for fetching challenge data
* @next {string} link to next part of chapter
*/
export default function ChapterIntroLayout({ 
    slug, 
    next
  } : {
    slug : string,
    next : string
  }) {
  function _getIntro(slug: string) {
    const intro = allIntroductions.find(
      (intro: Introduction) => intro.slugAsParams === slug
    )
    return intro
  }
  
  function getIntro(slug: string) {
    const chapter = allChapters.find(
      (chapter: Chapter) => chapter.slugAsParams === slug
    )
    const intro = _getIntro(chapter.intro[0])
    return intro
  }

  const intro =  getIntro(slug)

  return (
    <div className="flex grow">
      <div className="lg:flex lg:grow">
        <div className="lg:order-last lg:flex lg:shrink lg:basis-1/2 lg:border-l lg:border-white/25">
          <Image
            src={intro.image}
            alt={intro.title}
            width={600}
            height={600}
            className="w-full object-cover"
          />
        </div>
        <div className="flex shrink basis-1/2">
          <div className="flex flex-col px-[15px] lg:px-10 py-10 gap-10">
            <div
              dangerouslySetInnerHTML={{ __html: intro.body.html }}
              className="intro text-white"
            ></div>
            <div>
              <BoxButton
                href={next}
                classes="w-full sm:w-auto"
              >Start</BoxButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
 }