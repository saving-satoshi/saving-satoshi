'use client'

function addCommas(number) {
  const numberString = number.toString()
  const digits = numberString.split('')
  let position = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    if (position % 3 === 0 && position !== 1) {
      digits.splice(i, 0, ',')
    }
    position++
  }
  return digits.join('')
}

export default function InfoBox({
  title,
  content,
}: {
  title: string
  content: number
}) {
  return (
    <div className="mt-2.5 w-full bg-black/15 p-4 font-nunito font-semibold text-white">
      <div className="text-base">{title}</div>
      <div className="text-2xl">{addCommas(content)}</div>
    </div>
  )
}
