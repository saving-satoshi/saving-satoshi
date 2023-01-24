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
    <div className="flex w-full grow">
      <div className="lg:flex lg:grow lg:justify-center lg:px-0">
        <div className="lg:order-last lg:flex lg:shrink lg:basis-1/2 lg:justify-center lg:border-l lg:border-white/25">
          <Image
            src={intro.image}
            alt={intro.title}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex w-full shrink basis-1/2 justify-start text-white ">
          <div className="flex flex-col content-center justify-items-start mx-[15px] lg:mx-10 ">
            <div
              dangerouslySetInnerHTML={{ __html: intro.body.html }}
              className="intro my-10"
            ></div>
            <div className="mb-10">
              <BoxButton
                href={next}
                classes="w-full"
              >Start</BoxButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
 }