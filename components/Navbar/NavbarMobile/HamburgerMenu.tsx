import clsx from 'clsx'
import React, { useState } from 'react'

export default function HamburgerMenu(props) {
  const ariaLabel = props.isOpen ? 'Close Menu' : 'Open Menu'

  return (
    <div
      className="mr flex h-full w-10 cursor-pointer flex-col items-start justify-center overflow-hidden border-r border-white/25 p-1"
      onClick={props.clicked}
      role="button"
      aria-label={ariaLabel}
      aria-expanded={props.isOpen}
      aria-controls="lesson-navigation-menu"
    >
      <div
        className={clsx(
          'h-0.5 w-5 origin-top-right bg-white transition-all ease-in-out',
          'mb-[5px]',
          {
            'transform-none': !props.isOpen,
            'translate-x-0 -translate-y-[1.8px] -rotate-45': props.isOpen,
          }
        )}
        aria-hidden="true"
      />

      <div
        className={clsx(
          'h-0.5 w-5 origin-top-right bg-white transition-all ease-in-out',
          'mt-0.5',
          {
            'w-[15px] transform-none': !props.isOpen,
            'w-5 translate-x-[1.2px] translate-y-[3px] rotate-45': props.isOpen,
          }
        )}
        aria-hidden="true"
      />
    </div>
  )
}
