import React from 'react'
import TabGroupMobile from 'components/Navbar/NavbarMobile/TabGroupMobile'
import clsx from 'clsx'
import { lessons, chapters } from 'content'
import { themeSelector } from 'lib/themeSelector'

export default function Menu(props) {
  const { slug, lesson: lessonId } = props.params

  const theme = themeSelector(lessons, lessonId, chapters, slug)

  return (
    <div
      id="lesson-navigation-menu"
      className={clsx('absolute z-10 w-full bg-back duration-[400ms]', theme, {
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
