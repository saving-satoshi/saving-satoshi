'use client'

import clsx from 'clsx'

export default function InfoBox({
  content,
  className,
  title,
}: {
  content: number
  className: string
  title: string
}) {
  return (
    <>
      <div
        className={clsx(`${className} text-2xl font-normal`, {
          'opacity-25': content === 0,
          'fade-in text-white opacity-100': content !== 0,
        })}
      >
        {Intl.NumberFormat().format(content)}
      </div>
      <div
        className={clsx(`${className} font-nunito text-[13px] font-bold`, {
          'opacity-25': content === 0,
          'fade-in text-[#EDA081] opacity-100': content !== 0,
        })}
      >
        {title}
      </div>
    </>
  )
}
