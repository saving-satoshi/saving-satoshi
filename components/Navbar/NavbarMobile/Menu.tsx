import React from 'react'
import TabGroupMobile from 'components/Navbar/NavbarMobile/TabGroupMobile'
import clsx from 'clsx'

export default function Menu({ isOpen, clicked, params }) {
  const lang = params.lang

  return (
    <div
      id="lesson-navigation-menu"
      className={clsx('absolute z-10 w-full bg-back duration-[400ms]', {
        'h-full': isOpen,
        'h-0 delay-200': !isOpen,
      })}
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-label="Lesson Navigation Menu"
    >
      <TabGroupMobile
        lang={lang}
        isOpen={isOpen}
        clicked={clicked}
        params={params}
      />
    </div>
  )
}
