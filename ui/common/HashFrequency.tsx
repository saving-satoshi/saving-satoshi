import clsx from 'clsx'

export default function HashFrequency({
  disabled,
  step,
  hashPower,
}: {
  disabled: boolean
  step: number
  hashPower: number
}) {
  return (
    <div
      className={clsx('font-space-mono text-2xl', {
        'text-black/25': disabled,
        'fade-in text-white': !disabled,
      })}
    >
      {step < 4 && (
        <span>
          {(hashPower / 100).toFixed(2)}
          {!disabled && (
            <span className="fade-in text-white/50">
              *10<sup>15</sup>
            </span>
          )}
        </span>
      )}
      {step >= 4 && (
        <span>
          {(45012 / 100).toFixed(2)}
          <span className="text-white/50">
            *10<sup>15</sup>
          </span>
        </span>
      )}
    </div>
  )
}
