import clsx from 'clsx'

export default function HashFrequency({
  className = 'font-space-mono text-2xl',
  disabled,
  step,
  hashPower,
}: {
  className?: string
  disabled: boolean
  step: number
  hashPower: number
}) {
  return (
    <div
      className={clsx(className, {
        'text-black/25': disabled,
        'fade-in text-white': !disabled,
      })}
    >
      {step < 4 && (
        <span>
          {(hashPower / 100).toFixed(2)}
          {!disabled && (
            <span className="fade-in text-white/50">
              &times;10
              <sup>1{hashPower.toString().length === 4 ? '5' : '6'}</sup>
            </span>
          )}
        </span>
      )}
      {step >= 4 && (
        <span>
          {(43993 / 100).toFixed(2)}
          <span className="text-white/50">
            &times;10<sup>1{hashPower.toString().length === 4 ? '5' : '6'}</sup>
          </span>
        </span>
      )}
    </div>
  )
}
