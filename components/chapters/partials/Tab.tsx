'use client'

import { Lesson } from 'contentlayer/generated'
import { Tooltip } from 'components/ui/Tooltip'
import clsx from 'clsx'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useState } from 'react'

export const Tab = ({
  index,
  count,
  path,
  challenge,
}: {
  index: number,
  count: number,
  path: string,
  challenge: Lesson
}) => {
  const segment = useSelectedLayoutSegment()
  const slug = challenge.slugAsParams
  const href = path + '/' + slug
  const isActive = (!slug && segment === null) || segment === slug
  const isLast = index == count - 1

  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div
      className="relative flex items-stretch"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Link
        href={href}
        title={challenge.title}
        className={clsx(
          'flex items-center justify-center border-l border-white/25 px-7 text-center text-lg transition duration-100 ease-in-out hover:bg-black/25 hover:text-white',
          {
            'text-white text-opacity-50 hover:text-opacity-100': !isActive,
            'bg-black/25 text-opacity-100': isActive,
          }
        )}
      >
        {index + 1}
      </Link>
      <Tooltip
        title={'Challenge ' + (index + 1)}
        text={challenge.title}
        show={showTooltip}
        position={isLast ? 'below-right' : 'below'}
      />
    </div>
  )
}
