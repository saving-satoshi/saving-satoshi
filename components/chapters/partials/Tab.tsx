'use client'

import { Lesson } from 'contentlayer/generated'
import { Tooltip } from 'components/ui/Tooltip'
import clsx from 'clsx'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useState } from 'react'
import CheckIcon from 'public/assets/icons/check.svg'
import LockIcon from 'public/assets/icons/lock.svg'
import { getUserLessonStatus } from 'lib/content'

export const Tab = ({
  index,
  count,
  path,
  challenge,
  chapterId
}: {
  index: number,
  count: number,
  path: string,
  challenge: Lesson,
  chapterId: string
}) => {
  const segment = useSelectedLayoutSegment()
  const slug = challenge.slugAsParams
  const href = path + '/' + slug
  const isActive = (!slug && segment === null) || segment === slug
  const isLast = index == count - 1
  const status = getUserLessonStatus(chapterId, challenge.slugAsParams)

  const [showTooltip, setShowTooltip] = useState(false)
  const ComponentType = status.unlocked ? Link : 'p'

  return (
    <div
      className="relative flex items-stretch"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <ComponentType
        href={href}
        title={challenge.title}
        className={clsx(
          'relative flex items-center justify-center border-l border-white/25 px-7 text-center text-lg transition duration-100 ease-in-out',
          {
            'text-white text-opacity-50': !isActive,
            'hover:bg-black/25 hover:text-white hover:text-opacity-100': status.unlocked && !isActive,
            'bg-black/25 text-opacity-100': isActive,
          }
        )}
      >
        {index + 1}
        {!status.unlocked && <LockIcon
          className='
            absolute
            right-[10px]
            top-[10px]
            opacity-50
          '
        />}
        {status.completed && <CheckIcon
          className='
            absolute
            right-[5px]
            top-[5px]
            w-[20px]
            h-[20px]
          '
        />}
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
