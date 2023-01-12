import { allLessons, Lesson } from 'contentlayer/generated'
import { ChallengeItem } from './ChallengeItem'

export const ChallengeList = ({ challenges, path }) => {

  return (
    <div className="justify-stretch mt-6 flex w-full grow items-start font-nunito text-white">
      {challenges ? (
        <ul className="grid w-full items-start">
          {challenges.map((challenge, index) => (
            <ChallengeItem key={index + 1} position={index + 1} title={challenge.title} path={challenge.path} />
          ))}
        </ul>
      ) : (
        <p>Coming soon. Hang tight.</p>
      )}
    </div>
  )
}
