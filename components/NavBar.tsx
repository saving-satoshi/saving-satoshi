import Link from "next/link"

export const Navbar = () => {
    return (
        <div className='fixed left-0 top-0 w-screen font-cbrush'>
            <div className='m-auto flex justify-between items-center px-6 py-4 text-white'>
                <Link href='/'>
                    <h1 className='text-xl md:text-3xl'>Saving Satoshi</h1>
                </Link>
                <ul className='text-xl md:text-2xl flex'>
                    <li className='px-4'>
                        <Link href='/chapters'>
                            <h1 className='text-white text-opacity-75'>Chapters</h1>
                        </Link>
                    </li>
                    <li className='px-4'>
                        <Link href='/about'>
                            <h1 className='text-white text-opacity-75'>About</h1>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}