'use client'

import ChallengeListItem from './ChallengeListItem'
import { lessons } from 'content'
import { useLang, useTranslations } from 'hooks'

export default function ChallengeList({
  intros,
  lessonStrings,
  outros,
  challenges,
  chapterId,
}) {
  const lang = useLang()
  const t = useTranslations(lang)

  const introsData = intros.map((introId: string) => {
    const { title } = lessons[chapterId][introId].metadata

    return { introId, title }
  })

  const lessonsData = lessonStrings.map((lessonId: string) => {
    const { title } = lessons[chapterId][lessonId].metadata

    return { lessonId, title }
  })

  let groupedLessonData = {}

  lessonsData.forEach((lesson) => {
    const key = lesson.lessonId.split('-')[0]
    const value = lesson

    if (!groupedLessonData[key]) {
      groupedLessonData[key] = []
    }

    groupedLessonData[key].push(value)
  })

  const outrosData = outros.map((outroId: string) => {
    const { title } = lessons[chapterId][outroId].metadata

    return { outroId, title }
  })

  const challengesData = challenges.map((lessonId: string) => {
    const { title } = lessons[chapterId][lessonId].metadata

    return { lessonId, title }
  })

  return (
    <div className="flex w-full grow items-start justify-stretch font-nunito text-white md:mt-6">
      {challengesData.length > 0 && (
        <ul className="grid w-full items-start">
          <h2 className="font-cbrush text-2xl">Introductions</h2>
          {introsData.map((intro, index) => (
            <ChallengeListItem
              key={index + 1}
              position={index + 1}
              title={intro.title}
              chapterId={chapterId}
              lessonId={intro.introId}
            />
          ))}
          {Object.keys(groupedLessonData).map((title) => (
            <div key={title}>
              <h2 className="font-cbrush text-2xl">
                {title.charAt(0).toUpperCase() + title.slice(1)}
              </h2>
              <ul>
                {groupedLessonData[title].map((lesson, index) => (
                  <ChallengeListItem
                    key={index + 1}
                    position={index + 1}
                    title={lesson.title}
                    chapterId={chapterId}
                    lessonId={lesson.lessonId}
                  />
                ))}
              </ul>
            </div>
          ))}{' '}
          <h2 className="font-cbrush text-2xl">Outros</h2>
          {outrosData.map((outro, index) => (
            <ChallengeListItem
              key={index + 1}
              position={index + 1}
              title={outro.title}
              chapterId={chapterId}
              lessonId={outro.outroId}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
