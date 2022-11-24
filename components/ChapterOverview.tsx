import { Overview } from 'components/partials/Overview'
import { Chapter } from "contentlayer/generated"
import Image from "next/image"
import { TabGroup } from "./partials/TabGroup"

export const ChapterOverview = (chapter: Chapter) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-screen justify-center'>
            <div className='flex justify-center w-full text-white'>
                <div className='content-center justify-items-start sm:px-12 px-1 py-6 sm:py-36'>
                    <h2 className='text-3xl md:text-5xl text-left text-white text-opacity-75'>Chapter {chapter.position}</h2>
                    <h2 className='text-3xl md:text-5xl text-left'>{chapter.title}</h2>
                    <TabGroup
                        path="/"
                        items={[
                            {
                                text: 'Info',
                                slug: `${chapter.slug}`,
                                opt: 'overview'
                            },
                            {
                                text: 'Challenges'
                            }
                        ]}
                    />
                    <Overview 
                        desc= {chapter.body}
                        slug= {chapter.slug}
                        position= {chapter.position}
                     />
                </div>
            </div>
            <div className='flex justify-center'>
            <Image
                src={chapter.image}
                alt={chapter.title}
                width={1440}
                height={715}
                layout="responsive"
                objectFit="cover"
            />
            </div>
        </div>
    )
}