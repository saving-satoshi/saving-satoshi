export default function ProgressChapterMetaMapper(
  progress: string,
  chapterMeta: any
) {
  const chapterNumber = parseInt(progress.substring(2, 3))
  const lessonType = progress.substring(3, 6)
  const lessonNumber = parseInt(progress.substring(6, 7))

  if (chapterNumber !== chapterMeta.position + 1) {
    return chapterMeta.intros[0]
  }

  if (lessonType === 'INT') {
    return chapterMeta.intros[lessonNumber - 1]
  } else if (lessonType === 'OUT') {
    return chapterMeta.outros[lessonNumber - 1]
  } else {
    const lessonTypeArr = chapterMeta.lessons.filter((ele) =>
      ele.includes(lessonType.toLowerCase())
    )
    return lessonTypeArr[lessonNumber - 1]
  }
}
