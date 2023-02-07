'use client'

import clsx from 'clsx'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'

import Tooltip from './Tooltip'
import CheckIcon from 'public/assets/icons/check.svg'
import LockIcon from 'public/assets/icons/lock.svg'

import { useStatus } from 'hooks'
import { Lesson } from 'types'
import chapters from 'content/chapters'

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
  const [showTooltip, setShowTooltip] = useState(false)

  const challengeId = isRouteLesson ? pathData.pop().split('-')[0] : undefined
  const isActive = challenge.lessonId === challengeId
  const isLast = index == count - 1

  const ComponentType = status && status.unlocked ? Link : 'p'

  return (
    <div
      className="relative flex items-stretch"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <ComponentType
        href={`/chapters/${slug}/${challenge.lessonId}`}
        title={challenge.title}
        className={clsx(
          'relative flex items-center justify-center border-l border-white/25 px-7 text-center text-lg transition duration-100 ease-in-out',
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
      </ComponentType>

      <Tooltip
        title={'Challenge ' + (index + 1)}
        text={challenge.title}
        show={showTooltip}
        position={isLast ? 'below-right' : 'below'}
      />
    </div>
  )
}
