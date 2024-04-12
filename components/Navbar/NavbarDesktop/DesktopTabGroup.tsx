import Tab from './Tab'
import { chapters, lessons } from 'content'
import clsx from 'clsx'
import { Tooltip } from 'ui'
import ChallengeList from 'ui/chapter/ChallengeList'
import { themeSelector } from 'lib/themeSelector'

export default function DesktopTabGroup({ isOpen, params }) {
  const { slug, lesson: lessonId } = params

  const chapter = chapters[slug]

  const theme = themeSelector(lessons, lessonId, chapters, slug)

  if (!chapter) {
    return null
  }

  const challenges = chapter.metadata.challenges.map((lessonId: string) => {
    const { title } = lessons[slug][lessonId].metadata

    return { lessonId, title }
  })

  return (
    <div className="flex-l flex h-full items-stretch justify-center border-x border-white/25 text-center font-nunito text-xl font-semibold text-white transition duration-100 ease-in-out hover:bg-black/25 md:w-[70px]">
      <Tooltip
        id="hamburger-tooltip"
        position="bottom"
        offset={0}
        theme={theme}
        className="no-underline"
        content={
          <ChallengeList
            lessonPage
            intros={chapter.metadata.intros}
            lessonStrings={chapter.metadata.lessons}
            outros={chapter.metadata.outros}
            challenges={chapter.metadata.challenges}
            chapterId={chapter.metadata.slug}
          />
        }
      >
        <div className="relative flex h-full w-[50px] cursor-pointer flex-col flex-wrap items-center justify-center text-center font-nunito text-xl font-semibold text-white md:w-[70px]">
          <div className="felx-wrap flex flex-col justify-start">
            <div
              className={clsx(
                'h-0.5 w-5 origin-top-right bg-white transition-all ease-in-out',
                'mb-[5px]',
                {
                  'transform-none': !isOpen,
                  '-translate-y-[1.8px] translate-x-0 -rotate-45': isOpen,
                }
              )}
              aria-hidden="true"
            />
            <div
              className={clsx(
                'h-0.5 w-5 origin-top-right bg-white transition-all ease-in-out',
                'mt-0.5',
                {
                  'w-[15px] transform-none': !isOpen,
                  'w-5 translate-x-[1.2px] translate-y-[3px] rotate-45': isOpen,
                }
              )}
              aria-hidden="true"
            />
          </div>
        </div>
      </Tooltip>
    </div>
  )
}
