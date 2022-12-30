import clsx from 'clsx'
import { Markdown } from 'contentlayer/core'
import { Chapter } from 'contentlayer/generated'
import { BoxButton } from 'components/ui/BoxButton'

export const Overview = ({ chapter }: { chapter: Chapter }) => {
  return (
    <div className="mt-6 font-nunito">
      <div
        dangerouslySetInnerHTML={{ __html: chapter.body.html }}
        className="text-lg text-white"
      ></div>
      <div className="flex pt-8 md:w-full">
        <BoxButton
          href={chapter.slug}
          disabled={!chapter.lessons}
        >{chapter.lessons
          ? `Start chapter ${chapter.position}`
          : 'Coming soon'}
        </BoxButton>
      </div>
    </div>
  )
}
