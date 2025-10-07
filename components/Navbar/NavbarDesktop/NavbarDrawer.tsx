import clsx from 'clsx'
import { useAtomValue } from 'jotai'
import React, { useState } from 'react'
import CloseIcon from 'shared/icons/Close'
import { syncedCourseProgressAtom } from 'state/progressState'
import ChapterAccordion from './ChapterAccordion'
import Icon from 'shared/Icon'
import { useLang, useTranslations } from 'hooks'

interface INavbarDrawer {
  theme: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const NavbarDrawer = ({ theme, isOpen, setIsOpen }: INavbarDrawer) => {
  const lang = useLang()
  const t = useTranslations(lang)
  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const [currentChapter, setCurrentChapter] = useState(0)

  const onClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div
        onClick={onClick}
        className={clsx(
          'fixed inset-0  bg-[#00000040] transition-opacity duration-300',
          isOpen ? 'visible z-10 opacity-100' : 'invisible z-[-10] opacity-0'
        )}
      ></div>
      <aside
        className={clsx(
          'fixed inset-y-0 right-0 flex w-full max-w-[480px] transition-[z-index]',
          isOpen ? 'z-20' : 'z-[-10] delay-500'
        )}
      >
        <div
          className={clsx(
            'h-full w-full max-w-[480px] transform transition-transform duration-300 ease-in-out',
            theme,
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex h-[70px] w-full items-center justify-between border-b border-b-white bg-[#00000030] p-6">
            <p className="text-[22px]">{t('shared.chapters')}</p>
            <div className="cursor-pointer" onClick={onClick}>
              <Icon icon="close" className="w-8" />
            </div>
          </div>
          <div className="flex h-[calc(100dvh-70px)] flex-col overflow-y-auto">
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
        </div>
      </aside>
    </>
  )
}

export default NavbarDrawer
