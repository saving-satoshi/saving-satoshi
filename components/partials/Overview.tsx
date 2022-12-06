import clsx from "clsx";
import { Markdown } from "contentlayer/core";
import { Chapter } from "contentlayer/generated";
import Link from "next/link";


export const Overview = ({
    chapter
  } : {
    chapter: Chapter
  }) => {
    return (
        <div className='py-8 font-nunito'>
            <div
             dangerouslySetInnerHTML={{ __html: chapter.body.html }}
             className='text-lg text-justify text-white'>
             </div>
             <div className='pt-8 md:w-full flex'>
             <Link
                href={chapter.slug} 
                className={clsx('py-2.5 px-12 w-full text-center md:w-auto justify-center bg-white text-base-blue text-2xl font-nunito font-bold', {
                  'pointer-events-none': !chapter.lessons,
                  'pointer-events-auto': chapter.lessons
                })}
            >
            { chapter.lessons ? `Start chapter ${chapter.position}`: 'Coming soon'  }
            </Link>
             </div>
        </div>
    )
}