'use client'

import { Markdown } from "contentlayer/core";
import Link from "next/link";


export const Overview = ({
    slug, desc, position,
  } : {
    slug: string
    desc: Markdown,
    position: number
  }) => {
    return (
        <div className='py-8'>
            <div
             dangerouslySetInnerHTML={{ __html: desc.html }}
             className='text-lg'>
             </div>
             <div className='pt-8'>
             <Link
                href={slug} 
                className='py-2.5 px-12 w-full md:w-auto justify-center bg-white text-base-blue text-2xl'
            >
            Start chapter {position}
            </Link>
             </div>
        </div>
    )
}