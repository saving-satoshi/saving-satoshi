import { allLessons, Lesson } from 'contentlayer/generated'
import Link from 'next/link'

//Am i going to to this boilerplate for every view? 
// TODO make a factory (or other pattnern) to populate component data

async function getGenesis() {
    const slug = 'genesis'
    const data = await allLessons.find((challenge: Lesson) => challenge.slugAsParams === slug)
    return data
}

export default async function Genesis() {
    
    const genesis = await getGenesis()
    return (
        <div className='grid grid-cols-1 justify-items-center w-screen h-screen justify-center'>
            <div className='flex w-1/2 text-white pt-16'>
                <div className='content-center justify-items-center px-1 '>
                    <div
                        dangerouslySetInnerHTML={{ __html: genesis.body.html }}
                        className='pt-8 text-xl'
                    ></div>
                    <div className='pb-16 pt-9'>
                        <Link
                            href='https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f'
                            target='_blank'
                            className='py-2.5 px-12 w-full w-auto justify-center bg-white text-base-blue text-2xl'>
                            View Block 0
                        </Link>
                    </div>
                </div>
            </div>
            <hr className='border-1 border-white/25 h-1 w-screen'></hr>
            <div className='flex w-1/2 text-white '>
                <div className='content-center justify-items-center '>
                    <h1 className='text-xl'>Paste the ScriptSig HEX Representation</h1>
                    <div className='pt-8'>
                        <input
                            type='text'
                            size={154}

                            className='text-white tracking-widest border-b border-dashed border-gray/25 bg-transparent'
                            ></input>
                    </div>
                </div>
            </div>
            <div className='left-0 bottom-0 w-screen'>
                <div className='m-0 flex justify-between items-center text-white border-t border-white/25' aria-disabled>
                    <h2>Complete the challenge above to continue</h2>
                    <Link
                        href='/chapters/chapter-1/genesis/genesis-pt2'
                        className='py-2.5 px-12 w-full md:w-auto justify-center bg-white text-base-blue text-2xl'>
                        Next
                    </Link>
                </div>
            </div>
        </div>
    )

}