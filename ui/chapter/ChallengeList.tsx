'use client'

import ChallengeListItem from './ChallengeListItem'
import { lessons } from 'content'
import { useLang, useTranslations } from 'hooks'

export default function ChallengeList({ challenges, chapterId }) {
  const lang = useLang()
  const t = useTranslations(lang)
  const challengesData = challenges.map((lessonId) => {
    const { title } = lessons[chapterId][lessonId].metadata

    return { lessonId, title }
  })

  return (
    <div className="justify-stretch flex w-full grow items-start font-nunito text-white md:mt-6">
      {challengesData.length > 0 ? (
        <ul className="grid w-full items-start">
          {challengesData.map((challenge, index) => (
            <ChallengeListItem
              key={index + 1}
              position={index + 1}
              title={challenge.title}
              chapterId={chapterId}
              lessonId={challenge.lessonId}
            />
          ))}
        </ul>
      ) : (
        <p>{t('challenge_list.coming_soon')}</p>
      )}
    </div>
  )
}
