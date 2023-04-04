'use client'

import Image from 'next/image'

export default function ProgressBar({
  progress,
  avatar,
}: {
  progress: number
  avatar: string
}) {
  return (
    <div className="relative h-[30px] w-full rounded-full bg-black/15">
      <div
        className="absolute top-0 left-0 h-full rounded-full bg-red"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute top-0 left-1/2 z-20 flex h-[30px] w-[30px] -translate-x-1/2 items-center justify-center">
          <Image
            src={`/assets/avatars/${avatar}.png`}
            alt="Avatar"
            width={22}
            height={22}
            className="rounded-full border-2 border-white"
          />
        </div>
      </div>
    </div>
  )
}
