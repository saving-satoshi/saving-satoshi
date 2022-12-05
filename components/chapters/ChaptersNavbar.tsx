'use client'

import Link from "next/link"
import { AddressBar } from "./AddressBar"
import { TabGroup } from "./partials/TabGroup"
import { Item } from "./partials/TabGroup"
import { useRouter } from 'next/navigation';


export const ChaptersNavbar = ({ items, slug }) => {
    const router = useRouter()
    return (
        <div className='left-0 top-0 w-screen'>
            <div className='flex justify-between items-center text-white border-b border-white'>
                <div className='grid grid-flow-col'>
                    <button
                        className='text-white border-r border-white/50 hover:bg-blue-700 hover:text-white text-sm p-5 text-center inline-flex items-center'
                        onClick={() => router.back()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                    </button>
                    <AddressBar />
                </div>
                <div className='grid grid-flow-col px-4 space-x-2'>
                    <TabGroup
                        path={`chapters/${slug}`}
                        items={[
                            ...items
                        ]}></TabGroup>
                </div>
            </div>
        </div>
    )
}