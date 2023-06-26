'use client'

import clsx from 'clsx'

export enum StatisticVariant {
  Vertical = 0,
  Horizontal = 1,
}

export default function InfoBox({
  variant,
  transaction,
  bitcoin,
  className,
  transactionCard,
  transactionHighlight,
  transactionTitle,
  bitcoinCard,
  bitcoinHighlight,
  bitcoinTitle,
}: {
  variant: StatisticVariant
  transaction: number
  bitcoin: number
  className: string
  transactionCard: boolean
  transactionHighlight: boolean
  transactionTitle: string
  bitcoinCard: boolean
  bitcoinHighlight: boolean
  bitcoinTitle: string
}) {
  return (
    <div
      className={clsx(
        'mt-5 flex items-center justify-between gap-x-2.5 text-center font-space-mono',
        { 'flex-col gap-y-5': variant === StatisticVariant.Vertical }
      )}
    >
      {transactionCard && (
        <div
          className={clsx('relative', {
            'h-18 w-1/2': variant === StatisticVariant.Horizontal,
            'w-full': variant === StatisticVariant.Vertical,
          })}
        >
          <div
            className={clsx(
              'w-full rounded-[5px] border-2 border-transparent bg-black/15 py-2.5 font-space-mono',
              {
                'flex flex-row items-center justify-between px-[15px]':
                  variant === StatisticVariant.Vertical,
              }
            )}
          >
            <div
              className={clsx(`${className} font-normal`, {
                'opacity-25': transaction === 0,
                'fade-in text-white opacity-100': transaction !== 0,
                'order-1 flex text-[15px]':
                  variant === StatisticVariant.Vertical,
                'text-2xl': variant === StatisticVariant.Horizontal,
              })}
            >
              {Intl.NumberFormat().format(transaction)}
            </div>
            <div
              className={clsx(`${className} font-nunito font-bold`, {
                'opacity-25': transaction === 0,
                'fade-in text-[#EDA081] opacity-100': transaction !== 0,
                'text-[15px]': variant === StatisticVariant.Vertical,
                'text-[13px]': variant === StatisticVariant.Horizontal,
              })}
            >
              {transactionTitle}
            </div>
          </div>
          {transactionHighlight && (
            <div className="absolute inset-0 h-18 w-full animate-pulse rounded-[5px] border-2 border-[#FBEBC6] shadow-3xl"></div>
          )}
        </div>
      )}
      {bitcoinCard && (
        <div
          className={clsx('relative', {
            'h-18 w-1/2': variant === StatisticVariant.Horizontal,
            'w-full': variant === StatisticVariant.Vertical,
          })}
        >
          <div
            className={clsx(
              'w-full rounded-[5px] border-2 border-transparent bg-black/15 py-2.5 font-space-mono',
              {
                'flex flex-row items-center justify-between px-[15px]':
                  variant === StatisticVariant.Vertical,
              }
            )}
          >
            <div
              className={clsx(`${className} font-normal`, {
                'opacity-25': bitcoin === 0,
                'fade-in text-white opacity-100': bitcoin !== 0,
                'order-1 flex text-[15px]':
                  variant === StatisticVariant.Vertical,
                'text-2xl': variant === StatisticVariant.Horizontal,
              })}
            >
              {bitcoin.toFixed(4)}
            </div>
            <div
              className={clsx(`${className} font-nunito font-bold`, {
                'opacity-25': bitcoin === 0,
                'fade-in text-[#EDA081] opacity-100': bitcoin !== 0,
                'text-[15px]': variant === StatisticVariant.Vertical,
                'text-[13px]': variant === StatisticVariant.Horizontal,
              })}
            >
              {bitcoinTitle}
            </div>
          </div>
          {bitcoinHighlight && (
            <div className="absolute inset-0 h-18 w-full animate-pulse rounded-[5px] border-2 border-[#FBEBC6] shadow-3xl"></div>
          )}
        </div>
      )}
    </div>
  )
}
