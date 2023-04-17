'use client'

import clsx from 'clsx'

function addCommas(number: number): string {
  const numberString = number.toString()
  if (numberString.length <= 3) {
    return numberString // return the number as-is if it has three or fewer digits
  }
  const digits = numberString.split('')
  let position = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    if (position % 3 === 0 && position !== 1 && i !== 0) {
      digits.splice(i, 0, ',') // add a comma every three digits, except for the first and last digit
    }
    position++
  }
  return digits.join('')
}

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
      <div className="text-2xl">{addCommas(content)}</div>
    </div>
  )
}
