
import { allLessons } from 'contentlayer/generated'
import Link from "next/link"
import { ListItem } from "./ListItem"

export const ChallengeList = ({challenges}) => {
    const challengesData = challenges ? allLessons.filter((challenge: Lesson) => challenges.indexOf(challenge.slugAsParams) !== -1) : null

    return (
        <div className='flex grow justify-stretch items-start mt-6 font-nunito text-white w-full'>
            {challengesData ? 
                <ul className='grid w-full items-start'>
                    {challengesData.map((challenge, index) => (
                        <ListItem key={index+1} position={index+1} title={challenge.title} slug={challenge.slug} />
                    ))}
                </ul> :
                <p>Coming soon. Hang tight.</p>
            }
        </div>
    )
}

