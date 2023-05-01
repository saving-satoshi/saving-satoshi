'use client'

import clsx from 'clsx'

export default function InfoBox({
  titleTransaction,
  titleBitcoin,
  transaction,
  bitcoin,
  transactionHighlight,
  bitcoinHighlight,
}: {
  titleTransaction: string
  titleBitcoin: string
  transaction: number
  bitcoin: number
  transactionHighlight: boolean
  bitcoinHighlight: boolean
}) {
  return (
    <div className="mt-5 flex items-center justify-between gap-x-2.5 text-center font-space-mono">
      <div
        className={clsx(
          'w-full rounded-[5px] bg-black/15 p-4 font-space-mono  font-semibold',
          {
            'border-2 border-[#FBEBC6] drop-shadow-2xl':
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
          className={clsx('text-[13px] font-bold', {
            'text-black/25': transaction === 0,
            'text-[#EDA081]': transaction !== 0,
          })}
        >
          {titleTransaction}
        </div>
      </div>
      <div
        className={clsx(
          'w-full rounded-[5px] bg-black/15 p-4 font-space-mono ',
          {
            'border-2 border-[#FBEBC6] drop-shadow-2xl':
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
          className={clsx('text-[13px] font-bold', {
            'text-black/25': bitcoin === 0,
            'text-[#EDA081]': bitcoin !== 0,
          })}
        >
          Bitcoin<br></br>
          earned
        </div>
      </div>
    </div>
  )
}
