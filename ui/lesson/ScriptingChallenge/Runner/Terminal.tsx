import React from 'react'

function Terminal({ defaultMessage }: { defaultMessage?: string }, ref) {
  return (
    <>
      <div
        className="h-40 overflow-y-auto border-t border-white border-opacity-30 bg-[#253547] p-4"
        ref={ref}
      >
        {defaultMessage && (
          <div className="font-mono text-sm text-white">{defaultMessage}</div>
        )}
      </div>
    </>
  )
}

export default React.forwardRef(Terminal)
