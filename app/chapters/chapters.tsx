import { ChapterOverview } from 'components/ChapterOverview'
import { allChapters, Chapter } from 'contentlayer/generated'
import { compareAsc } from 'date-fns'


export async function getChapters() {
    const chapters: Chapter[] = allChapters.sort((a, b) => {
      return compareAsc(a.position, b.position)
    })
    return chapters
  }

export async function Chapters() {
    const chapters = await getChapters()
    return (
        <div>
        {chapters.map((chapter, idx) => (
            <ChapterOverview key={idx} {...chapter}/>
        ))}
        </div>
    )
}
