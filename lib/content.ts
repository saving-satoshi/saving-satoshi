import { allChapters, Chapter } from 'contentlayer/generated'
import { compareAsc } from 'date-fns'

export async function getChapters() {
  const chapters: Chapter[] = await allChapters.sort((a, b) => {
    return compareAsc(a.position, b.position)
  })
  return chapters
}
