'use client'

import { createContext, useContext, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { Button } from 'shared'
import ChapterTabs from './Tabs'
import ChallengeList from './ChallengeList'
import chapters from 'content/chapters'
import { getUserProgress } from 'lib/user'
import LockIcon from 'public/assets/icons/lock.svg'

import { ChapterContextType } from 'types'

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

export default function Chapter({ children, metadata }) {
  const [activeTab, setActiveTab] = useState('info')

  const chapter = chapters[metadata.slug]
  const position = metadata.position + 1
  const isEven = position % 2 == 0
  var display = false

  const context = {}
  function getSecondPart(str) {
    return Number(str.split('-')[1])
  }
  const currentChapter = getSecondPart(getUserProgress().chapter)
  if (currentChapter >= position) {
    display = true
  }

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
              Chapter {position}
            </h2>

            <h3 className="mb-6 text-left text-3xl text-white md:text-5xl">
              {chapter.metadata.title}
            </h3>

            {display ? (
              <div>
                <ChapterTabs
                  items={tabData}
                  activeId={activeTab}
                  onChange={setActiveTab}
                  classes="mt-8"
                />

                <div className="flex grow lg:grow-0">
                  <div
                    aria-hidden={activeTab !== 'info' ? 'true' : 'false'}
                    className={clsx('w-full lg:-mr-[100%] lg:block', {
                      visible: activeTab === 'info',
                      invisible: activeTab !== 'info',
                    })}
                  >
                    <div className="mt-6 font-nunito">
                      <div className="text-lg text-white">{children}</div>
                      <div className="flex pt-8 md:w-full">
                        <Button
                          href={`/chapters/${chapter.metadata.slug}`}
                          disabled={chapter.metadata.lessons.length === 0}
                        >
                          {chapter.metadata.lessons.length > 0
                            ? `Start chapter ${position}`
                            : 'Coming soon'}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    aria-hidden={activeTab !== 'challenges' ? 'true' : 'false'}
                    className={clsx('w-full lg:-mr-[100%] lg:block', {
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
            ) : (
              <div className="flex font-nunito text-lg text-white">
                <LockIcon className="my-auto mr-2 justify-center" />
                Complete Chapter {position - 1} to unlock.
              </div>
            )}
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
          />
        </div>
      </div>
    </ChapterContext.Provider>
  )
}
