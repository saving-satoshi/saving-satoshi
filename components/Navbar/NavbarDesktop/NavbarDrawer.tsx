import clsx from 'clsx'
import { useAtomValue } from 'jotai'
import React, { useState } from 'react'
import CloseIcon from 'shared/icons/Close'
import { syncedCourseProgressAtom } from 'state/progressState'
import ChapterAccordion from './ChapterAccordion'

const NavbarDrawer = ({ theme }) => {
  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const [currentChapter, setCurrentChapter] = useState(0)

  return (
    <>
      <div className="fixed left-0 top-0 z-10 h-screen w-full bg-[#00000040]"></div>
      <aside className="fixed right-0 top-0 z-20 flex h-screen w-full justify-end ">
        <div className={clsx('h-full w-full max-w-[480px]', theme)}>
          <div className="flex h-[70px] w-full items-center justify-between border-b border-b-white bg-[#00000030] p-6">
            <p className="text-[22px]">Chapter’s List</p>
            <CloseIcon className="w-8" />
          </div>
          <div className="flex h-[calc(100dvh-70px)] flex-col overflow-y-auto">
            {courseProgress &&
              courseProgress.chapters.map((chapter) => (
                <ChapterAccordion
                  key={chapter.id}
                  id={chapter.id}
                  chapter={chapter}
                  currentChapter={currentChapter}
                  setCurrentChapter={setCurrentChapter}
                  completed={chapter.completed}
                />
              ))}
          </div>
        </div>

        {/*  */}
      </aside>
    </>
  )
}

export default NavbarDrawer
