import { SaveProgressButton } from 'components/chapters/SaveProgressButton'
import { allLessons, Lesson } from 'contentlayer/generated'

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
                <div className='content-center justify-items-start sm:px-12 px-1 py-6'>
                <div
                    className='genesis-p2'
                    dangerouslySetInnerHTML={{ __html: genesis.body.html }}
                ></div>
                </div>
            </div>
            <div className='flex justify-center w-full text-white'>
                <div id='terminal'></div>
            </div>
            <div className='left-0 bottom-0 w-screen'>
                <div className='m-0 flex justify-between items-center text-white border-t border-white/25' aria-disabled>
                    <h2>Complete the challenge above to continue</h2>
                    <SaveProgressButton/>
                </div>
            </div>
        </div>
    )

}