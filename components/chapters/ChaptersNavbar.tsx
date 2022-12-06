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
            <div className='flex justify-between items-stretch text-white border-b border-white/80'>
                <div className='flex items-stretch'>
                    <button
                        className='text-white border-r border-white/25 hover:bg-black/20 text-sm p-5 items-center transition ease-in-out duration-100 group'
                        onClick={() => router.back()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 transition ease-in-out duration-100 opacity-50 group-hover:opacity-100'>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                    </button>
                    <AddressBar />
                </div>
                <div className='flex items-stretch'>
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