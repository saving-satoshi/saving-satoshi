'use client'

import clsx from 'clsx'
import { Chapter } from 'contentlayer/generated'
import { useState } from 'react'
import { ChallengeList } from './Challenges'
import { Overview } from './Overview'

export type Item = {
  text: string
  slug?: string
}

export const TabGroup = ({
  chapter,
  items,
}: {
  chapter: Chapter
  items: Item[]
}) => {
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div className="mt-6 flex grid grow grid-cols-1">
      <div className="flex grow gap-2">
        {items.map((item, idx) => (
          <button
            key={idx}
            className={clsx(
              'flex w-auto min-w-[140px] justify-center px-4 text-center font-nunito text-lg font-bold',
              {
                'border-2 border-black/25 text-white text-opacity-75 transition duration-150 ease-in-out hover:text-opacity-50':
                  toggleState !== idx,
                'border-0 border-black/25 bg-black bg-opacity-25 py-[2px] text-white':
                  toggleState == idx,
              }
            )}
            onClick={() => toggleTab(idx)}
          >
            {item.text}
          </button>
        ))}
      </div>
      <div className="flex grow">
        {toggleState == 0 && <Overview chapter={chapter}></Overview>}
        {toggleState == 1 && (
          <ChallengeList challenges={chapter.lessons}></ChallengeList>
        )}
      </div>
    </div>
  )
}
