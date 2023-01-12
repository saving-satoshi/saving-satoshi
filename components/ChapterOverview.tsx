import { Chapter } from 'contentlayer/generated'
import { OverviewImage } from './partials/OverviewImage'
import { OverviewInfo } from './partials/OverviewInfo'

export const ChapterOverview = ({chapter, odd, even, children}: {chapter: any, odd?: boolean, even?: boolean, children?: any}) => {
  return (
    <div className="flex grid grid-cols-1 justify-center lg:grid-cols-2 lg:px-0">
      {even ? (
        <>
          <div className="order-2 flex justify-start lg:order-1 lg:py-[112px] lg:px-[50px]">
            <OverviewInfo chapter={chapter}>{children}</OverviewInfo>
          </div>
          <div className="order-1 flex justify-center lg:order-2 lg:mt-0 mt-6">
            <OverviewImage image={chapter.image} title={chapter.title} />
          </div>
        </>
      ) : (
        <>
          <div className="order-2 flex justify-start lg:order-2 lg:py-[112px] lg:px-[50px]">
            <OverviewInfo chapter={chapter}>{children}</OverviewInfo>
          </div>
          <div className="order-1 flex justify-center lg:order-1 lg:mt-0 mt-6">
            <OverviewImage image={chapter.image} title={chapter.title} />
          </div>
        </>
      )}
    </div>
  )
}
