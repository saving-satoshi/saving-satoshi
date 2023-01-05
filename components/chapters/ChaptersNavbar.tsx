'use client'

import Link from 'next/link'
import { AddressBar } from './AddressBar'
import { TabGroup } from './partials/TabGroup'
import { Item } from './partials/TabGroup'
import { useRouter } from 'next/navigation'
import ArrowLeftIcon from 'public/assets/icons/arrow-left.svg'

export const ChaptersNavbar = ({ items, slug }) => {
  const router = useRouter()
  return (
    <div className="left-0 top-0 w-screen">
      <div className="flex items-stretch justify-between border-b border-white/80 text-white">
        <div className="flex items-stretch">
          <button
            title="Back"
            className="group items-center border-r border-white/25 p-5 text-sm text-white transition duration-100 ease-in-out hover:bg-black/20"
            onClick={() => router.back()}
          >
            <ArrowLeftIcon className="h-6 w-6 opacity-50 transition duration-100 ease-in-out group-hover:opacity-100" />
          </button>
          <AddressBar />
        </div>
        <div className="flex items-stretch">
          <TabGroup path={`chapters/${slug}`} items={[...items]}></TabGroup>
        </div>
      </div>
    </div>
  )
}
