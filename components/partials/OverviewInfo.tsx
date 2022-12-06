import { Chapter } from ".contentlayer/generated/types"
import { Overview } from "./Overview"
import { TabGroup } from "./TabGroup"


export const OverviewInfo = (chapter: Chapter) => {
    return (
        <div className='content-center justify-items-start w-full px-1'>
            <h2 className='text-xl md:text-3xl text-left text-white text-opacity-75 font-nunito font-bold'>Chapter {chapter.position}</h2>
            <h2 className='text-3xl md:text-5xl text-left text-white'>{chapter.title}</h2>
            <TabGroup
                chapter={chapter}
                items={[
                    {
                        text: 'Info',
                    },
                    {
                        text: 'Challenges',
                    }
                ]}
            />
        </div>

    )
    
}