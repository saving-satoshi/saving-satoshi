'use client'

import { createContext, useContext, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { Button } from 'shared'
import ChapterTabs from './Tabs'
import ChallengeList from './ChallengeList'
import { useLocalizedRoutes } from 'hooks'
import LockIcon from 'public/assets/icons/lock.svg'
import { lessons, chapters } from 'content'

import { ChapterContextType } from 'types'
import { useTranslations } from 'hooks'
import useLessonStatus from 'hooks/useLessonStatus'
import { useProgressContext } from 'providers/ProgressProvider'
import { getLessonKey, keysMeta } from 'lib/progress'

const ChapterContext = createContext<ChapterContextType | null>(null)

export const useChapterContext = () => useContext(ChapterContext)

const tabData = [
  {
    id: 'info',
    text: 'Info',
  },
  {
    id: 'challenges',
    text: 'Challenges',
  },
]

export default function Chapter({ children, metadata, lang }) {
  const { progress } = useProgressContext()
  const { isUnlocked } = useLessonStatus(
    progress,
    getLessonKey(metadata.slug, 'outro-1')
  )

  const display = metadata.slug === 'chapter-1' || isUnlocked

  const [activeTab, setActiveTab] = useState('info')

  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)
  const chapter = chapters[metadata.slug]
  const position = metadata.position + 1
  const isEven = position % 2 == 0

  const context = {}

  return (
    <ChapterContext.Provider value={context}>
      <div className="grid grid-cols-1 justify-center lg:grid-cols-2 lg:px-0">
        <div
          className={clsx(
            'order-2 flex justify-start lg:py-[112px] lg:px-[50px]',
            {
              'lg:order-1': isEven,
              'lg:order-2': !isEven,
            }
          )}
        >
          <div className="ml-3.5 mr-3.5 w-full content-center justify-items-start px-1">
            <h2 className="mt-6 text-left font-nunito text-xl font-bold text-white text-opacity-75 md:text-3xl">
              {t('shared.chapter')} {position}
            </h2>

            <h3 className="mb-6 text-left text-3xl text-white md:text-5xl">
              {t(chapter.metadata.title)}
            </h3>

            <div>
              {chapter.metadata.lessons.length > 0 && display ? (
                <ChapterTabs
                  items={tabData}
                  activeId={activeTab}
                  onChange={setActiveTab}
                  classes="mt-8"
                />
              ) : null}
              <div className="flex grow lg:grow-0">
                <div
                  aria-hidden={activeTab !== 'info' ? 'true' : 'false'}
                  className={clsx('-mr-[100%] block w-full', {
                    visible: activeTab === 'info',
                    invisible: activeTab !== 'info',
                  })}
                >
                  <div className="mt-6 font-nunito">
                    {(chapter.metadata.lessons.length > 0 && display && (
                      <div className="text-lg text-white">{children}</div>
                    )) ||
                      (chapter.metadata.lessons.length > 0 && !display && (
                        <div className="flex font-nunito text-lg text-white">
                          <LockIcon className="my-auto mr-2 justify-center" />
                          {t('chapter.chapter_locked_one')} {position - 1}{' '}
                          {t('chapter.chapter_locked_two')}
                        </div>
                      )) ||
                      (chapter.metadata.lessons.length === 0 && null)}
                    <div className="flex pt-8 md:w-full">
                      <Button
                        href={
                          !progress ||
                          (progress &&
                            keysMeta[progress].path.split('/')[2] !==
                              chapter.metadata.slug)
                            ? `${routes.chaptersUrl}/${chapter.metadata.slug}/${chapter.metadata.intros[0]}`
                            : `${routes.chaptersUrl}/${chapter.metadata.slug}/${
                                keysMeta[progress].path.split('/')[3]
                              }`
                        }
                        disabled={
                          chapter.metadata.lessons.length === 0 || !display
                        }
                        classes="w-full"
                      >
                        {(chapter.metadata.lessons.length > 0 &&
                          display &&
                          progress &&
                          progress.substring(3, 7) === 'INT1' &&
                          `${t('shared.start_chapter')} ${position}`) ||
                          (chapter.metadata.lessons.length > 0 &&
                            display &&
                            !progress &&
                            `${t('shared.start_chapter')} ${position}`) ||
                          (chapter.metadata.lessons.length > 0 &&
                            display &&
                            progress &&
                            keysMeta[progress].path.split('/')[2] !==
                              chapter.metadata.slug &&
                            `${t('shared.start_chapter')} ${position}`) ||
                          (chapter.metadata.lessons.length > 0 &&
                            display &&
                            progress &&
                            keysMeta[progress].path.split('/')[2] ===
                              chapter.metadata.slug &&
                            `${t('shared.next')}`) ||
                          (chapter.metadata.lessons.length > 0 &&
                            !display &&
                            `${t('chapter.chapter_locked_one')} ${
                              position - 1
                            } ${t('chapter.chapter_locked_two')}`) ||
                          (chapter.metadata.lessons.length === 0 &&
                            t('shared.coming_soon')) ||
                          t('shared.start_chapter')}
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden={activeTab !== 'challenges' ? 'true' : 'false'}
                  className={clsx('-mr-[100%] block w-full', {
                    visible: activeTab === 'challenges',
                    invisible: activeTab !== 'challenges',
                  })}
                >
                  <ChallengeList
                    challenges={chapter.metadata.challenges}
                    chapterId={chapter.metadata.slug}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={clsx('order-1 mt-6 flex justify-center lg:mt-0', {
            'lg:order-2': isEven,
            'lg:order-1': !isEven,
          })}
        >
          <Image
            src={chapter.metadata.image}
            alt={chapter.metadata.title}
            width={600}
            height={600}
            className="h-full w-full object-cover"
            loading={
              chapter.metadata.title === 'chapter_one.title' ? 'eager' : 'lazy'
            }
          />
        </div>
      </div>
    </ChapterContext.Provider>
  )
}
