import { Chapter } from '.contentlayer/generated/types'
import { Overview } from './Overview'
import { TabGroup } from './TabGroup'

export const OverviewInfo = (chapter: Chapter) => {
  return (
    <div className="w-full content-center justify-items-start px-1">
      <h2 className="text-left font-nunito text-xl font-bold text-white text-opacity-75 md:text-3xl">
        Chapter {chapter.position}
      </h2>
      <h2 className="text-left text-3xl text-white md:text-5xl">
        {chapter.title}
      </h2>
      <TabGroup
        chapter={chapter}
        items={[
          {
            text: 'Info',
          },
          {
            text: 'Challenges',
          },
        ]}
      />
    </div>
  )
}
