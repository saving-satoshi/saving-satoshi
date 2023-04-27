import React from 'react'

export default function Modal({
  children,
  active,
  onRequestClose,
}: {
  children?: React.ReactNode
  active: boolean
  onRequestClose: () => void
}) {
  const handleClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      onRequestClose()
    }
  }

  if (!active) {
    return null
  }

  return (
    <div
      className="modal-backdrop fixed inset-0 z-10 flex items-center justify-center bg-overlayColor"
      onClick={handleClick}
    >
      <div className="h-full w-screen transform bg-back p-5 pt-10 font-nunito text-white shadow-lg outline-none sm:absolute sm:h-fit sm:w-[550px] sm:rounded-lg sm:pt-5">
        {children}
      </div>
    </div>
  )
}
