'use client'

import type { Item } from './TabGroup'
import clsx from 'clsx'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export const Tab = ({
  path,
  item: { slug, id },
}: {
  path: string
  item: Item
}) => {
  const segment = useSelectedLayoutSegment()
  const href = slug ? path + '/' + slug : path
  const isActive = (!slug && segment === null) || segment === slug
  return (
    <Link
      href={href}
      title={slug}
      className={clsx(
        'flex items-center justify-center border-l border-white/25 px-7 text-center text-lg transition duration-100 ease-in-out hover:bg-black/25 hover:text-white',
        {
          'text-white text-opacity-50 hover:text-opacity-100': !isActive,
          'bg-black/25 text-opacity-100': isActive,
        }
      )}
    >
      {id}
    </Link>
  )
}
