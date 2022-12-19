import { ChapterOverview } from 'components/ChapterOverview'
import { getChapters } from 'lib/content'

export async function Chapters() {
  const chapters = await getChapters()
  return (
    <div>
      {chapters.map((chapter, idx) => (
        <ChapterOverview key={idx} {...chapter} />
      ))}
    </div>
  )
}
