import React from 'react'
import clsx from 'clsx'

function Terminal(
  { className, defaultMessage }: { className?: string; defaultMessage: string },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx(
        'terminal overflow-auto border-t border-white border-opacity-30 bg-black/15 p-4',
        className
      )}
    >
      <div className="output">{defaultMessage}</div>
    </div>
  )
}

export default React.forwardRef(Terminal)
