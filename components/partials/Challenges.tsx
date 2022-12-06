import Link from "next/link"
import { ListItem } from "./ListItem"

export const ChallengeList = ({challenges}) => {
    return (
        <div className='flex grow justify-stretch items-start mt-6 font-nunito text-white w-full'>
            {challenges ? 
                <ul className='grid w-full items-start'>
                    {challenges.map((ch, idx) => (
                        <ListItem key={idx+1} pos={idx+1} title={ch}/>
                    ))}
                </ul> :
                <p>Coming soon. Hang tight.</p>
            }
        </div>
    )
}

