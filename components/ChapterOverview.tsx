import { Chapter } from "contentlayer/generated"
import { OverviewImage } from './partials/OverviewImage'
import { OverviewInfo } from './partials/OverviewInfo'

export const ChapterOverview = (chapter: Chapter) => {
    if (chapter.position %2 == 0 ){
        return (
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center'>
                <div className='flex justify-center order-2 lg:order-1'>
                    <OverviewInfo {...chapter} />
                </div>
                <div className='flex justify-center order-1 lg:order-2'>
                    <OverviewImage {...chapter} />
                </div>
            </div> 
        ) 
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center'>
            <div className='flex justify-center order-2 lg:order-2'>
                <OverviewInfo {...chapter} />
            </div>
            <div className='flex justify-center order-1 lg:order-1'>
                <OverviewImage {...chapter} />
            </div>
        </div>
    )
}