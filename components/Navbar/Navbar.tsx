'use client'

import Link from 'next/link'
import Address from 'components/Navbar/Address'
import TabGroup from 'components/Navbar/TabGroup'
import ArrowLeftIcon from 'public/assets/icons/arrow-left.svg'
import UserButton from './UserButton'
import { useLessonNav } from 'hooks'

export default function Navbar({ params }) {
  const { prevLessonPath } = useLessonNav()

  return (
    <div className="left-0 top-0 w-full">
      <div className="flex items-stretch justify-between border-b border-white/80 text-white">
        <div className="flex items-stretch">
          <Link
            title="Back"
            className="group items-center border-r border-white/25 p-5 text-sm text-white transition duration-100 ease-in-out hover:bg-black/20"
            href={prevLessonPath}
          >
            <ArrowLeftIcon className="h-6 w-6 opacity-50 transition duration-100 ease-in-out group-hover:opacity-100" />
          </Link>

          <Address />
        </div>
        <nav className="flex items-center">
          <TabGroup params={params} />
          <UserButton />
        </nav>
      </div>
    </div>
  )
}
