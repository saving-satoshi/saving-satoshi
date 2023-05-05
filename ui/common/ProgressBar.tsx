'use client'

import clsx from 'clsx'

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="relative h-[30px] w-full rounded-[5px]  bg-black/20">
      <div
        className={clsx(
          'absolute top-0 left-0 h-full rounded-[5px] bg-[#FBEBC6]',
          {
            '!bg-[#5DBC59]': progress === 100,
          }
        )}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}
