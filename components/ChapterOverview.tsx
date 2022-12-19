import { Chapter } from 'contentlayer/generated'
import { OverviewImage } from './partials/OverviewImage'
import { OverviewInfo } from './partials/OverviewInfo'

export const ChapterOverview = (chapter: Chapter) => {
  return (
    <div className="flex grid grid-cols-1 justify-center px-6 lg:grid-cols-2 lg:px-0">
      {chapter.position % 2 == 0 ? (
        <>
          <div className="order-2 flex justify-start lg:order-1 lg:py-[112px] lg:px-[50px]">
            <OverviewInfo {...chapter} />
          </div>
          <div className="order-1 flex justify-center lg:order-2">
            <OverviewImage {...chapter} />
          </div>
        </>
      ) : (
        <>
          <div className="order-2 flex justify-start lg:order-2 lg:py-[112px] lg:px-[50px]">
            <OverviewInfo {...chapter} />
          </div>
          <div className="order-1 flex justify-center lg:order-1">
            <OverviewImage {...chapter} />
          </div>
        </>
      )}
    </div>
  )
}
