import { chapters, lessons } from 'content'
import clsx from 'clsx'
import { Tooltip } from 'ui'
import ChallengeList from 'ui/chapter/ChallengeList'
import { themeSelector } from 'lib/themeSelector'
import { useEffect, useState } from 'react'

export default function DesktopTabGroup({ params }) {
  const { slug, lesson: lessonId } = params
  const [isOpen, setIsOpen] = useState(false)

  const chapter = chapters[slug]

  const theme = themeSelector(lessons, lessonId, chapters, slug)

  useEffect(() => {
    function handleHover() {
      setIsOpen(true)
    }

    function handleHoverOut() {
      setIsOpen(false)
    }

    const tooltip = document.getElementById('hamburger-tooltip')
    const hamburgerIcon = document.getElementById('hamburger-tooltip-icon')
    tooltip?.addEventListener('mouseenter', handleHover)
    tooltip?.addEventListener('mouseleave', handleHoverOut)
    hamburgerIcon?.addEventListener('mouseenter', handleHover)
    hamburgerIcon?.addEventListener('mouseleave', handleHoverOut)

    return () => {
      tooltip?.removeEventListener('mouseenter', handleHover)
      tooltip?.removeEventListener('mouseleave', handleHoverOut)
      hamburgerIcon?.removeEventListener('mouseenter', handleHover)
      hamburgerIcon?.removeEventListener('mouseleave', handleHoverOut)
    }
  }, [])

  if (!chapter) {
    return null
  }

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
        <div
          id="hamburger-tooltip-icon"
          className="relative flex h-full w-[50px] cursor-pointer flex-col flex-wrap items-center justify-center text-center font-nunito text-xl font-semibold text-white md:w-[70px]"
        >
          <div className="flex flex-col flex-wrap items-start justify-start">
            <div
              className={clsx(
                'h-0.5 w-5 origin-top-right bg-white transition-all ease-in-out',
                'mb-[5px]',
                {
                  'transform-none': !isOpen,
                  '-translate-x-[3.2px] -translate-y-[1.8px] -rotate-45':
                    isOpen,
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
                  'w-5 -translate-x-[2.2px] translate-y-[3px] rotate-45':
                    isOpen,
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
