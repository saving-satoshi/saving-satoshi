import { allLessons, Lesson } from 'contentlayer/generated'
import Link from 'next/link'

//Am i going to to this boilerplate for every view? 
// TODO make a factory (or other pattnern) to populate component data

async function getTx2() {
    const slug = 'transacting-1'
    const data = await allLessons.find((challenge: Lesson) => challenge.slugAsParams === slug)
    return data
}

export default async function Genesispt2() {
    const genesis = await getTx2()
    return (
        <div className='grid grid-cols-1 justify-items-center w-screen h-screen justify-center'>
        <div className='flex md:w-1/2 w-screen text-white pt-16'>
            <div className='content-center justify-items-center px-1 font-nunito'>
                <div
                    className='lg:pt-8 pt-2 genesis'
                    dangerouslySetInnerHTML={{ __html: genesis.body.html }}
                ></div>
                <div className='pb-16 pt-9'>
                    <Link
                        href='https://www.blockchain.com/btc/tx/75764fd0c95b4c17b728d10f7555509adfc0789ddc47683c45aeddd1c34727f8'
                        className='py-2.5 px-12 w-full md:w-auto justify-center bg-white text-base-blue text-xl font-nunito font-bold'>
                        View Transaction
                    </Link>
                </div>
            </div>
        </div>
        <hr className='border-1 border-white/25 h-1 w-screen'></hr>
        <div className='flex md:w-1/2 text-white font-space-mono justify-center'>
            <div className='content-center justify-items-center '>
                <h1 className='text-xl'>Enter the OP_RETURN type</h1>
                <div className='pt-8 w-full'>
                    <input
                        type="textarea" 
                        name="textValue"
                        className='w-full bg-transparent divide-y-3'></input>
                </div>
            </div>
        </div>
        <div className='w-screen'>
            <div className='m-0 flex justify-between items-center text-white border-t border-white/25' aria-disabled>
                <h2>Complete the challenge above to continue</h2>
                <Link
                    href='/chapters/chapter-1/transacting/transacting-2'
                    className='py-2.5 px-12 w-full md:w-auto justify-center bg-white text-base-blue text-2xl'>
                    Next
                </Link>
            </div>
        </div>
    </div>
    )

}