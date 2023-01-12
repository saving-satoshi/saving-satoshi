'use client'

import { Tooltip } from 'components/ui/Tooltip'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter, useSelectedLayoutSegment } from 'next/navigation'
import { useState } from 'react'
import Router from 'next/router'

export const Tab = ({
  index,
  last,
  challenge,
}: {
  index: number,
  last: boolean
  challenge: {
    title: string,
    path: string,
  }
}) => {
  const segment = useSelectedLayoutSegment()
  const isActive = (!challenge.path && segment === null) || segment === challenge.path.split('/')[3];

  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div
      className="relative flex items-stretch"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Link
        href={challenge.path}
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
        position={last ? 'below-right' : 'below'}
      />
    </div>
  )
}
