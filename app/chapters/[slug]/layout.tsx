import { ChaptersNavbar } from 'components/chapters/ChaptersNavbar';
import { allChapters, Chapter, allLessons,  } from 'contentlayer/generated'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { Item } from 'components/chapters/partials/TabGroup';

function transformLessonMeta(lessons: String[]) : (Item[]) {
    return lessons.map((lesson: string, index: number) => 
    ({
        slug: lesson,
        id: index +=1 
    }))
}

async function getLessons({ params }) : Promise<Item[]> {
    const chapter = await allChapters.find((chapter: Chapter) => chapter.slugAsParams === params.slug )
    let res: Item[]
    if (chapter.lessons) {
        res = transformLessonMeta(chapter.lessons)
    } 
    
    return res;
}


export default async function Layout({ children, params }: { 
    children: React.ReactNode,
    params: Params
}) {
    const navinfo = await getLessons({ params })
    return (
        <div className='flex flex-col ch1-background'>
            <div className='min-h-screen fix-grow-issue flex flex-col blur' >
            {navinfo ?
            <>
                <ChaptersNavbar slug={params.slug} items={navinfo}  />
                {children}
            </> :
            <div className='flex items-center justify-center h-screen mb-12'>
                <h1 className='text-6xl sm:text-7xl lg:text-8xl text-center text-white'>Coming Soon...</h1>
            </div>
            }
         </div>
        </div>
    )
  }