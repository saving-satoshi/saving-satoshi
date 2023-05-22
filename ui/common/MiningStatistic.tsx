'use client'

import clsx from 'clsx'

export default function InfoBox({
  transaction,
  bitcoin,
  transactionHighlight,
  bitcoinHighlight,
  transactionTitle,
  bitcoinTitle,
}: {
  transaction: number
  bitcoin: number
  transactionHighlight: boolean
  bitcoinHighlight: boolean
  transactionTitle: string
  bitcoinTitle: string
}) {
  return (
    <div className="mt-5 flex items-center justify-between gap-x-2.5 text-center font-space-mono">
      <div
        className={clsx(
          'h-[72px] w-full rounded-[5px] border-2 border-transparent bg-black/15  py-2.5 font-space-mono font-semibold',
          {
            'animate-duration-200 animate-pulse !border-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              transactionHighlight === true,
          }
        )}
      >
        <div
          className={clsx('text-2xl font-normal', {
            'text-black/25': transaction === 0,
            'text-white': transaction !== 0,
          })}
        >
          {Intl.NumberFormat().format(transaction)}
        </div>
        <div
          className={clsx('font-nunito text-[13px] font-bold', {
            'text-black/25': transaction === 0,
            'text-[#EDA081]': transaction !== 0,
          })}
        >
          {transactionTitle}
        </div>
      </div>
      <div
        className={clsx(
          'h-[72px] w-full rounded-[5px] border-2 border-transparent bg-black/15 p-4 px-[15px] py-2.5 font-space-mono ',
          {
            'animate-duration-200 animate-pulse  !border-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              bitcoinHighlight === true,
          }
        )}
      >
        <div
          className={clsx('text-2xl font-normal', {
            'text-black/25': bitcoin === 0,
            'text-white': bitcoin !== 0,
          })}
        >
          {bitcoin.toFixed(4)}
        </div>
        <div
          className={clsx('font-nunito text-[13px] font-bold', {
            'text-black/25': bitcoin === 0,
            'text-[#EDA081]': bitcoin !== 0,
          })}
        >
          {bitcoinTitle}
        </div>
      </div>
    </div>
  )
}
