import { allLessons, Lesson } from 'contentlayer/generated'
import Link from 'next/link'


//Am i going to to this boilerplate for every view? 
// TODO make a factory (or other pattern) to populate component data
async function getTransacting() {
    const slug = 'transacting'
    const data = await allLessons.find((challenge: Lesson) => challenge.slugAsParams === slug)
    return data
}

export default async function Transacting() {
    const transacting = await getTransacting()

    return (
        <div className='grid grid-cols-1 justify-items-center w-screen h-screen justify-center'>
            <div className='flex lg:w-1/2 w-screen items-center text-white px-6 lg:px-0'>
                <div className='content-center justify-items-center px-1 font-nunito'>
                    <div
                        className='genesis'
                        dangerouslySetInnerHTML={{ __html: transacting.body.html }}
                    ></div>
                    <div className='pt-8'>
                        <Link
                            href='/chapters/chapter-1/transacting/transacting-1'
                            className='py-2.5 px-12 w-full md:w-auto justify-center bg-white text-base-blue text-xl font-nunito font-bold'>
                            Continue
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}