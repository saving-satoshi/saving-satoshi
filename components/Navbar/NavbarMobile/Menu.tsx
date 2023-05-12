import React from 'react'
import TabGroupMobile from 'components/Navbar/NavbarMobile/TabGroupMobile'
import clsx from 'clsx'
import { lessons, chapters } from 'content'

export default function Menu(props) {
  const { slug, lesson: lessonId } = props.params

  //If theme was specified on lesson it should take priority over a theme that was specified on a chapter, otherwise fallback to bg-back
  const theme =
    lessons[slug]?.[lessonId]?.metadata.solidTheme ??
    chapters[slug]?.metadata.solidTheme ??
    'bg-back'

  return (
    <div
      id="lesson-navigation-menu"
      className={clsx(
        'absolute z-10 w-full bg-back duration-[400ms]',
        `${theme}`,
        {
          'h-full': props.isOpen,
          'h-0 delay-200': !props.isOpen,
        }
      )}
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
