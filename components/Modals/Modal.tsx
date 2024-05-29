import clsx from 'clsx'
import React from 'react'

export default function Modal({
  children,
  active,
  onRequestClose,
  wide,
  theme,
}: {
  children?: React.ReactNode
  active: boolean
  onRequestClose: () => void
  wide?: boolean
  theme?: string
}) {
  const handleClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      document.body.classList.remove('overflow-y-hidden')
      onRequestClose()
    }
  }

  if (!active) {
    return null
  }

  return (
    <div
      className="modal-backdrop fixed inset-0 z-10 flex items-center justify-center overflow-y-auto bg-overlayColor"
      onClick={handleClick}
    >
      <div
        className={clsx(
          'h-full w-screen transform overflow-y-auto overflow-x-hidden p-5 pt-10 font-nunito text-white shadow-lg outline-none sm:absolute sm:h-fit sm:max-h-[90%] sm:rounded-lg sm:pt-5',
          theme,
          {
            'sm:w-[550px]': !wide,
            'sm:w-[90%]': wide,
            'bg-back': !theme,
          }
        )}
      >
        {children}
      </div>
    </div>
  )
}
