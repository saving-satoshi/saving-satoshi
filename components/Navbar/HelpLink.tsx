'use client'

import Link from 'next/link'
import { Tooltip } from 'ui'

export default function UserButton() {
  return (
    <div className="flex-l flex h-full items-stretch">
      <Tooltip
        id={`navbar-tab-tooltip-3`}
        position="bottom"
        offset={0}
        content={
          <div className="flex">
            <span className="whitespace-nowrap">Get stuck?</span>
          </div>
        }
      >
        <Link
          className="relative flex h-full w-12 cursor-pointer items-center justify-center border-r border-white/25 text-center text-2xl text-white transition duration-100 ease-in-out hover:bg-black/25 md:w-16"
          target={'_blank'}
          href={
            'https://docs.google.com/forms/d/e/1FAIpQLSe97mijpR8HsN9fG8B1aeE2JsM4Tt5lE9TB6YkVk01D7jdh9g/viewform'
          }
        >
          ?
        </Link>
      </Tooltip>
    </div>
  )
}
