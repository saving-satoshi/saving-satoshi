import { allLessons, Lesson } from 'contentlayer/generated'
import Link from 'next/link'

//Am i going to to this boilerplate for every view? 
// TODO make a factory (or other pattnern) to populate component data

async function getGenesis() {
    const slug = 'genesis-pt2'
    const data = await allLessons.find((challenge: Lesson) => challenge.slugAsParams === slug)
    return data
}

export default async function Genesispt2() {
    const genesis = await getGenesis()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-screen justify-center'>
            <div className='flex justify-center w-full text-white'>
                <div className='content-center justify-items-start sm:px-12 px-1 py-6 sm:py-36'>
                <div
                        dangerouslySetInnerHTML={{ __html: genesis.body.html }}
                        className='pt-8 text-xl'
                    ></div>
                </div>
            </div>
            <div className='flex justify-center'>
            </div>
        </div>
    )

}