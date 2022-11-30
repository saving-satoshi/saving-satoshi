import Link from "next/link"

export const Footer = () => {
    return (
        <div className='left-0 bottom-0 w-screen'>
            <div className='m-auto flex justify-center items-center px-6 py-4 text-white font-cbrush'>
                <p className='p-1'>An open-source production by the bitcoin community.</p>
                <a href='https://github.com/saving-satoshi' className='underline p-1'>
                     Check the code.
                </a>
            </div>

        </div>
    )
}