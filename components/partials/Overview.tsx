import clsx from 'clsx'
import { Markdown } from 'contentlayer/core'
import { Chapter } from 'contentlayer/generated'
import Link from 'next/link'

export const Overview = ({ chapter }: { chapter: Chapter }) => {
  return (
    <div className="mt-6 font-nunito">
      <div
        dangerouslySetInnerHTML={{ __html: chapter.body.html }}
        className="text-lg text-white"
      ></div>
      <div className="flex pt-8 md:w-full">
        <Link
          href={chapter.slug}
          className={clsx(
            'w-full justify-center bg-white py-2.5 px-12 text-center font-nunito text-2xl font-bold text-base-blue md:w-auto',
            {
              'pointer-events-none opacity-25': !chapter.lessons,
              'pointer-events-auto transition duration-150 ease-in-out hover:opacity-75':
                chapter.lessons,
            }
          )}
        >
          {chapter.lessons
            ? `Start chapter ${chapter.position}`
            : 'Coming soon'}
        </Link>
      </div>
    </div>
  )
}
