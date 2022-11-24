import { ChaptersNavbar } from 'components/chapters/ChaptersNavbar';
import { allChapters, Chapter } from 'contentlayer/generated'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { Item } from 'components/chapters/partials/TabGroup';

function transformLessonMeta(lessons: String[]) : (Item[]) {
    return lessons.map((lesson: string, index: number) => 
    ({
        slug: lesson,
        id: index +=1 
    }))
}

export async function getLessons({ params }) : Promise<Item[]> {
    const chapter = await allChapters.find((chapter: Chapter) => chapter.slugAsParams === params.slug )

    const metadata = transformLessonMeta(chapter.lessons)
    return metadata;
}


export default async function Layout({ children, params }: { 
    children: React.ReactNode,
    params: Params
}) {
    const navinfo = await getLessons({ params })
    return (
        <div className='bg-fixed bg-left bg-cover'>
            <ChaptersNavbar slug={params.slug} items={navinfo}  />
            <div>{children}</div>
        </div>
    )
  }