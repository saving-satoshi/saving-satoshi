import Image from 'next/image'
import {
  allChapters,
  Chapter,
  Introduction,
  allIntroductions,
} from 'contentlayer/generated'
import { BoxButton } from 'components/ui/BoxButton'

//TODO define better load

async function _getIntro(slug: string) {
  const intro = await allIntroductions.find(
    (intro: Introduction) => intro.slugAsParams === slug
  )
  return intro
}

async function getIntro(slug: string) {
  const chapter = await allChapters.find(
    (chapter: Chapter) => chapter.slugAsParams === slug
  )
  const intro = await _getIntro(chapter.intro[0])
  return intro
}

export default async function Page({ params }) {
  const intro = await getIntro(params.slug)
  return (
    <div className="flex w-screen grow">
      <div className="flex grow justify-center px-6 lg:px-0">
        <div className="flex w-full shrink basis-1/2 justify-start text-white ">
          <div className="flex flex-col content-center justify-items-start px-1 py-1 sm:p-10 sm:py-1">
            <div
              dangerouslySetInnerHTML={{ __html: intro.body.html }}
              className="intro pt-8"
            ></div>
            <div className="mt-8">
              <BoxButton
                text="Start"
                href="/chapters/chapter-1/genesis"
              />
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
