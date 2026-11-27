import clsx from 'clsx'
import { syncedCourseProgressAtom } from 'state/progress/atoms'
import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'
import ChapterAccordion from '../NavbarDesktop/ChapterAccordion'
import { usePathData } from 'hooks'

export default function TabGroup({ isOpen, clicked, params }) {
  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const { chapterId: pathChapterId } = usePathData()

  const chapterSlug = params?.slug || pathChapterId || ''
  const activeChapterId = chapterSlug.match(/^chapter-(\d+)$/)
    ? Number(chapterSlug.match(/^chapter-(\d+)$/)[1])
    : 0

  const [currentChapter, setCurrentChapter] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setCurrentChapter(activeChapterId)
    } else {
      setCurrentChapter(0)
    }
  }, [isOpen, activeChapterId])

  return (
    <div className="flex h-full flex-col items-stretch font-nunito">
      <ul
        className={clsx(
          'grid w-full items-start py-4',
          'duration-800 transform transition ease-in-out',
          {
            '-translate-x-[110%]': !isOpen,
            'translate-x-0': isOpen,
          }
        )}
      >
        <div className="flex h-[calc(100dvh-70px)] flex-col text-white">
          {courseProgress &&
            courseProgress.chapters.map((chapter) => (
              <ChapterAccordion
                key={chapter.id}
                id={chapter.id}
                currentChapter={currentChapter}
                setCurrentChapter={setCurrentChapter}
                completed={chapter.completed}
                hasDifficulty={chapter.hasDifficulty}
              />
            ))}
        </div>
      </ul>
    </div>
  )
}
