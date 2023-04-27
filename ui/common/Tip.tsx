'use client'

import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Icon from 'shared/Icon'

const transitionStyles = {
  entering: { opacity: 0.5 },
  entered: { opacity: 1 },
  exiting: { opacity: 0.5 },
  exited: { opacity: 0 },
}

export default function Tip({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const [collapsed, setCollapsed] = useState(false)
  const nodeRef = useRef(null)

  return (
    <li className="mb-4">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center font-semibold"
      >
        {!collapsed ? (
          <Icon icon="caretRight" className="mr-2" />
        ) : (
          <Icon icon="caretRight" className="mr-2 rotate-90 transform" />
        )}{' '}
        {title}
      </button>
      <CSSTransition
        in={collapsed}
        timeout={100}
        unmountOnExit
        nodeRef={nodeRef}
      >
        {(state) => (
          <p
            className="duration-250 mt-2 opacity-75 transition-all ease-in-out"
            style={transitionStyles[state]}
            ref={nodeRef}
          >
            {children}
          </p>
        )}
      </CSSTransition>
    </li>
  )
}
