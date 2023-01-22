'use client'

 import { allLessons, Lesson } from 'contentlayer/generated'
 import { useState, useEffect } from 'react'
 import { useMediaQuery } from 'react-responsive'
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
  const [hydrated, setHydrated] = useState(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' })

   useEffect(() => {
   	setHydrated(true);
   }, []);

   return (hydrated &&(
   <>
     {
     isSmallScreen ? (
      <div className="
      flex
      w-full
      grow
      flex-col
      ">
        <Image
          src={intro.image}
          alt={intro.title}
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="flex w-full shrink basis-1/2 justify-start text-white ">
            <div className="flex flex-col content-center justify-items-start mx-[15px]">
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
     ) : (
      <div className="flex w-screen grow">
        <div className="flex grow justify-center px-0">
          <div className="flex w-full shrink basis-1/2 justify-start text-white ">
            <div className="flex flex-col content-center justify-items-start px-1 py-1 sm:p-10 sm:py-1">
              <div
                dangerouslySetInnerHTML={{ __html: intro.body.html }}
                className="intro pt-8"
              ></div>
              <div className="mt-8">
                <BoxButton
                  href={next}
                >Start</BoxButton>
              </div>
            </div>
          </div>
          <div className="flex shrink basis-1/2 justify-center border-l border-white/25">
            <Image
              src={intro.image}
              alt={intro.title}
              width={1440}
              height={715}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
     )
     }
   </>
   ))
 }