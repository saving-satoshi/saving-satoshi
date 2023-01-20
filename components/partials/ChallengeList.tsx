import { allLessons, Lesson } from 'contentlayer/generated'
import Link from 'next/link'
import { ChallengeItem } from './ChallengeItem'
import { useEffect, useState } from 'react'
import { getUserLessonStatus } from 'lib/content'
import { isUserLoggedIn, getUser } from 'lib/user'

export const ChallengeList = ({ challenges, chapterId, path }) => {
  const challengesData = challenges ? allLessons.filter((challenge: Lesson) => challenges.indexOf(challenge.slugAsParams) !== -1) : null

  return (
    <div className="justify-stretch mt-6 flex w-full grow items-start font-nunito text-white">
      {challengesData ? (
        <ul className="grid w-full items-start">
          {challengesData.map((challenge, index) => (
            <ChallengeItem
              key={index + 1}
              position={index + 1}
              title={challenge.title}
              slug={challenge.slugAsParams}
              path={path}
              status={getUserLessonStatus(chapterId, challenge.slugAsParams)}
            />
          ))}
        </ul>
      ) : (
        <p>Coming soon. Hang tight.</p>
      )}
    </div>
  )
}
