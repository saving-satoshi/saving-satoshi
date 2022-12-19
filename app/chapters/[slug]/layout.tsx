import { ChaptersNavbar } from 'components/chapters/ChaptersNavbar'
import { allChapters, Chapter, allLessons } from 'contentlayer/generated'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { Item } from 'components/chapters/partials/TabGroup'

function transformLessonMeta(lessons: String[]): Item[] {
  return lessons.map((lesson: string, index: number) => ({
    slug: lesson,
    id: (index += 1),
  }))
}

async function getLessons({ params }): Promise<Item[]> {
  const chapter = await allChapters.find(
    (chapter: Chapter) => chapter.slugAsParams === params.slug
  )
  let res: Item[]
  if (chapter.lessons) {
    res = transformLessonMeta(chapter.lessons)
  }

  return res
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Params
}) {
  const navinfo = await getLessons({ params })
  return (
    <div className="ch1-background flex flex-col">
      <div className="fix-grow-issue flex min-h-screen flex-col blur">
        {navinfo ? (
          <>
            <ChaptersNavbar slug={params.slug} items={navinfo} />
            {children}
          </>
        ) : (
          <div className="mb-12 flex h-screen items-center justify-center">
            <h1 className="text-center text-6xl text-white sm:text-7xl lg:text-8xl">
              Coming Soon...
            </h1>
          </div>
        )}
      </div>
    </div>
  )
}
