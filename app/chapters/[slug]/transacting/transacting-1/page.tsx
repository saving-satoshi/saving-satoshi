import { Input } from 'components/Input'
import { allLessons, Lesson } from 'contentlayer/generated'
import Link from 'next/link'

const inputAmount = 40

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
        <div className='grid grid-cols-1 justify-items-center w-screen h-screen px-6 lg:px-0 justify-center'>
            <div className='flex lg:w-1/2 w-screen text-white pt-16'>
                <div className='content-center justify-items-center px-6 lg:px-0 font-nunito'>
                    <div
                        className='lg:pt-8 pt-2 genesis'
                        dangerouslySetInnerHTML={{ __html: genesis.body.html }}
                    ></div>
                    <div className='pb-16 pt-9'>
                        <Link
                            href='https://blockstream.info/tx/75764fd0c95b4c17b728d10f7555509adfc0789ddc47683c45aeddd1c34727f8?expand'
                            className='py-2.5 px-12 w-full md:w-auto justify-center bg-white text-base-blue text-xl font-nunito font-bold'>
                            View transaction
                        </Link>
                    </div>
                </div>
            </div>
            <hr className='border-1 border-white/25 h-1 w-screen'></hr>
            <div className='flex lg:w-1/2 text-white font-space-mono justify-center'>
                <div className='content-center justify-items-center pb-16'>
                    <h1 className='text-xl text-center'>Enter the OP_RETURN type</h1>
                    <div className='pt-8 w-full'>
                        <Input amount={inputAmount}></Input>
                    </div>
                </div>
            </div>
            <div className='w-screen md:pb-[30px] border-t border-white/25'>
                <div className='flex grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
                    <div className='flex justify-center md:justify-start pt-4 md:pt-0'>
                    <h2 className='px-5 text-white/50 text-[21px] font-nunito'>Complete the challenge above to continue</h2>
                    </div>
                    <div className='flex justify-center md:justify-end pt-4 px-6 md:px-0 md:pt-0 pb-[30px] md:pb-0'>
                    <Link
                        href='/chapters/chapter-1/genesis/genesis-pt2'
                        className='py-2.5 px-12 w-full md:w-auto justify-center text-center bg-white text-base-blue text-[21px] font-bold font-nunito'>
                        Next
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}