'use client'

import clsx from 'clsx'

export default function InfoBox({
  title,
  content,
  highlight,
}: {
  title: string
  content: number
  highlight: boolean
}) {
  return (
    <div
      className={clsx(
        'mt-2.5 w-full bg-black/15 p-4 font-nunito font-semibold text-white',
        {
          'border border-[var(--terminal-output)] bg-[var(--terminal-bg)] text-[var(--terminal-output)]':
            highlight === true,
        }
      )}
    >
      <div className="text-base">{title}</div>
      <div className="text-2xl">{Intl.NumberFormat().format(content)}</div>
    </div>
  )
}
