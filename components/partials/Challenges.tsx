import Link from 'next/link'
import { ListItem } from './ListItem'

export const ChallengeList = ({ challenges }) => {
  return (
    <div className="justify-stretch mt-6 flex w-full grow items-start font-nunito text-white">
      {challenges ? (
        <ul className="grid w-full items-start">
          {challenges.map((ch, idx) => (
            <ListItem key={idx + 1} pos={idx + 1} title={ch} />
          ))}
        </ul>
      ) : (
        <p>Coming soon. Hang tight.</p>
      )}
    </div>
  )
}
