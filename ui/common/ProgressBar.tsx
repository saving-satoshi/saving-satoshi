'use client'

import clsx from 'clsx'

export default function ProgressBar({
  progress,
  title,
  total,
}: {
  progress: number
  title: string
  total?: number
}) {
  return (
    <>
      <div
        className={clsx('relative mb-2.5 font-nunito text-lg font-semibold', {
          'fade-in text-white': progress !== 0,
          'text-black/50': progress === 0,
        })}
      >
        <span className={clsx({ 'fade-in text-[#EDA081]': progress !== 0 })}>
          {title}
        </span>{' '}
        <span className="absolute right-0">
          {progress} {total && `of ${total}`}
        </span>
      </div>
      {total && (
        <div className="relative h-[30px] w-full rounded-[5px]  bg-black/20">
          <div className="h-full w-full overflow-hidden rounded-[5px]">
            <div
              className={clsx(
                'top-0 left-0 h-full origin-left transform-gpu rounded-[5px] bg-[#FBEBC6] transition-transform',
                {
                  '!bg-[#5DBC59]': progress === total,
                }
              )}
              style={{
                transform: `translate3d(-${
                  progress <= 5 && progress > 0
                    ? (total - 5) / 10
                    : (total - progress) / 10
                }%,0,0)`,
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}
