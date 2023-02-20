import React from 'react'
import TabGroupMobile from 'components/Navbar/NavbarMobile/TabGroupMobile'
import clsx from 'clsx'

export default function Menu(props) {
  return (
    <div
      id="lesson-navigation-menu"
      className={clsx('absolute z-10 w-full bg-back duration-[400ms]', {
        'h-full': props.isOpen,
        'h-0 delay-200': !props.isOpen,
      })}
      aria-modal="true"
      aria-hidden={!props.isOpen}
      aria-label="Lesson Navigation Menu"
    >
      <TabGroupMobile
        isOpen={props.isOpen}
        clicked={props.clicked}
        params={props.params}
      />
    </div>
  )
}
