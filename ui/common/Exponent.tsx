import clsx from 'clsx'

export default function Exponent({
  hashes,
  step,
  className,
}: {
  hashes: number
  className?: string
  step?: number
}) {
  return (
    <div
      className={clsx(className, {
        'text-white/25': step === 0 || hashes === 0,
        'fade-in text-white': step !== 0,
      })}
    >
      {!hashes || step === 0
        ? 0
        : (hashes / 10 ** (hashes.toString().length - 2)).toFixed(2)}
      {hashes > 0 && step !== 0 && (
        <span className="fade-in text-white/50">
          &times;10
          <sup>{(hashes * 10000).toString().length + 6}</sup>
        </span>
      )}
    </div>
  )
}
