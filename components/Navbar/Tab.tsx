'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Tooltip } from 'ui'
import CheckIcon from 'public/assets/icons/check.svg'
import LockIcon from 'public/assets/icons/lock.svg'

import { useStatus } from 'hooks'
import { Lesson } from 'types'

export default function Tab({
  index,
  count,
  params,
  challenge,
}: {
  index: number
  count: number
  params: any
  challenge: Lesson
}) {
  const { slug } = params

  const pathName = usePathname()
  const pathData = pathName.split('/')
  const isRouteLesson = pathData.length === 4

  const status = useStatus(slug, challenge.lessonId)

  const challengeId = isRouteLesson ? pathData.pop().split('-')[0] : undefined
  const isActive = challenge.lessonId === challengeId
  const isLast = index === count - 1

  return (
    <Tooltip
      position="bottom"
      offset={0}
      content={
        <div className="flex flex-col">
          <span className="text-m whitespace-nowrap leading-none text-white/50">
            Challenge {index + 1}
          </span>
          <span className="whitespace-nowrap">{challenge.title}</span>
        </div>
      }
    >
      <Link
        href={`/chapters/${slug}/${challenge.lessonId}`}
        title={challenge.title}
        className={clsx(
          'relative flex h-full items-center justify-center border-l border-white/25 px-7 text-center text-lg transition duration-100 ease-in-out',
          {
            'text-white text-opacity-50': !isActive,
            'hover:bg-black/25 hover:text-white hover:text-opacity-100':
              status && status.unlocked && !isActive,
            'bg-black/25 text-opacity-100': isActive,
            'border-r': isLast,
          }
        )}
      >
        {index + 1}
        {status && !status.unlocked && (
          <LockIcon className="absolute right-[10px] top-[10px] opacity-50" />
        )}
        {status && status.completed && (
          <CheckIcon className="absolute right-[5px] top-[5px] h-[20px] w-[20px]" />
        )}
      </Link>
    </Tooltip>
  )
}
