'use client'

import clsx from 'clsx'

export enum ProgressBarVariant {
  Blocks = 0,
  Percentage = 1,
  Total = 2,
  TotalBar = 3,
}

export default function ProgressBar({
  progress,
  title,
  variant,
  total,
  percentage,
  focus,
  className,
}: {
  progress: number
  title: string
  variant: ProgressBarVariant
  fontSize: string
  total?: number
  percentage?: number
  focus?: boolean
  className?: string
}) {
  return (
    <>
      <div
        className={clsx(
          `${className} flex flex-row items-center gap-[10px] self-stretch font-nunito text-lg font-semibold`,
          {
            'fade-in text-white': progress !== 0,
            'py-[10px] px-[15px]':
              variant === ProgressBarVariant.Blocks ||
              variant === ProgressBarVariant.Percentage,
            'mb-2.5': variant === ProgressBarVariant.TotalBar,
          }
        )}
      >
        <span
          className={clsx('flex-grow', {
            'fade-in text-[#EDA081]': progress !== 0,
          })}
        >
          {title}
        </span>{' '}
        {variant === ProgressBarVariant.Percentage &&
          typeof percentage === 'number' && (
            <span
              className={clsx('fade-in items-start', {
                'rounded-[5px] bg-[#28B123] py-[5px] px-[7px] text-white':
                  focus,
                'text-[#3DCFEF]': !focus,
              })}
            >
              {percentage}%
            </span>
          )}
        <span>
          {progress}{' '}
          {(variant === ProgressBarVariant.Total ||
            variant === ProgressBarVariant.TotalBar) &&
            total &&
            `of ${total}`}
        </span>
      </div>
      {variant === ProgressBarVariant.TotalBar && total && (
        <div className="relative h-[30px] w-full rounded-[5px] bg-black/20">
          <div className="h-full w-full overflow-hidden rounded-[5px]">
            <div
              className={clsx(
                'top-0 left-0 h-full origin-left transform-gpu rounded-[5px] bg-[#FBEBC6] transition-transform',
                {
                  '!bg-[#5DBC59]': progress === total,
                }
              )}
              style={{
                transform: `translate3d(-${total - progress}%,0,0)`,
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}
