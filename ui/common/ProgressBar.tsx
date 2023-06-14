'use client'

import clsx from 'clsx'

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="relative h-[30px] w-full rounded-[5px]  bg-black/20">
      <div className="h-full w-full overflow-hidden rounded-[5px]">
        <div
          className={clsx(
            'top-0 left-0 h-full origin-left transform-gpu rounded-[5px] bg-[#FBEBC6] transition-transform',
            {
              '!bg-[#5DBC59]': progress === 100,
            }
          )}
          style={{
            transform: `translate3d(-${
              progress <= 0.5 && progress > 0 ? 100 - 0.5 : 100 - progress
            }%,0,0)`,
          }}
        />
      </div>
    </div>
  )
}
