import React from 'react'
import clsx from 'clsx'

function Terminal(
  {
    className,
    error,
    defaultMessage,
  }: { className?: string; error?: string; defaultMessage: string },
  ref
) {
  return (
    <div
      className={clsx(
        'overflow-auto border-t border-white border-opacity-30 bg-black/15 p-4',
        className
      )}
    >
      {/* {error && <div className="">{error}</div>} */}
      <div className="terminal" ref={ref}>
        <div className="output">{defaultMessage}</div>
      </div>
    </div>
  )
}

export default React.forwardRef(Terminal)
