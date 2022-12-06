'use client'

import clsx from "clsx";
import { Chapter } from "contentlayer/generated";
import { useState } from "react";
import { ChallengeList } from "./Challenges";
import { Overview } from "./Overview";

export type Item = {
  text: string;
  slug?: string
};

export const TabGroup = ({ chapter, items }: { chapter: Chapter, items: Item[] }) => {
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index);
  }


  return (
    <div className="flex grow grid grid-cols-1 mt-6">
      <div className='flex grow gap-2' >
        {items.map((item, idx) => (
          <button
            className={clsx('flex justify-center text-center w-auto px-4 text-lg font-nunito font-bold min-w-[140px]', {
              'text-white text-opacity-75 border-2 border-black/25 hover:text-opacity-50 transition ease-in-out duration-150':
                toggleState !== idx,
              'bg-black bg-opacity-25 border-0 border-black/25 py-[2px] text-white': toggleState == idx,
            })
            } onClick={() => toggleTab(idx)}>
            {item.text}
          </button>
        ))}
      </div >
      <div className='flex grow'>
        {toggleState == 0 &&
          <Overview chapter={chapter}></Overview>
        }
        {toggleState == 1 &&
          <ChallengeList challenges={chapter.lessons}></ChallengeList>
        }
      </div>

    </div>
  )
}