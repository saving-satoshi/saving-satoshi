import Link from "next/link"

export const Hero = () => {
    return (
        <div className='flex items-end justify-center h-screen mb-12 bg-fixed bg-left bg-cover homepage-img'>
            <div className='p-10 text-white flex justify-center flex-col w-screen bg-gradient-to-b from-base-blue/0 to-base-blue/100 font-cbrush'>
                <h1 className='text-6xl sm:text-7xl lg:text-8xl text-center'>Saving Satoshi</h1>
                <p className='text-2xl sm:text-3xl lg:text-4xl text-center'>Time travel through the history of bitcoin  and learn bitcoin coding along the way.</p>
                <div className='flex grid grid-cols-1 md:grid-cols-2 justify-center md:space-x-5 pt-8 pb-12'>
                    <div className='flex justify-center sm:justify-end'>
                    <button className='py-2.5 px-12 w-full md:w-auto justify-center bg-white text-base-blue text-2xl'>
                        <Link href='/chapters' legacyBehavior>
                            <text className='font-nunito font-bold'>
                                Enter the time machine
                            </text>
                        </Link>
                    </button>
                    </div>
                    <div className='flex justify-center sm:justify-start pt-4 md:pt-0'>
                        <button className='py-2.5 px-12 w-full md:w-auto justify-center border text-2xl'>
                            <Link href='/about' legacyBehavior>
                                <text className='font-nunito font-bold'>
                                 Tell me more
                                </text>
                        </Link>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}