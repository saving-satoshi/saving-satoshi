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
        <div className='py-8 font-nunito'>
            <div
             dangerouslySetInnerHTML={{ __html: desc.html }}
             className='text-lg text-justify text-white'>
             </div>
             <div className='pt-8 md:w-full flex'>
             <Link
                href={slug} 
                className='py-2.5 px-12 w-full text-center md:w-auto justify-center bg-white text-base-blue text-2xl font-nunito font-bold'
            >
            Start chapter {position}
            </Link>
             </div>
        </div>
    )
}