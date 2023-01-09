import React, { useRef } from 'react';
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'

/*

Position options:

- above-left
- above
- above-right
- below-left
- below
- below-right
- left-top
- left
- left-bottom
- right-top
- right
- right-bottom

 */

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 }
};

export const Tooltip = ({
    title,
    text,
    show,
    position
  }: {
    title?: string,
    text: string,
    show: boolean,
    position?: string
  }) => {
    const nodeRef = useRef(null);

    let classes = 'absolute bg-back border border-white pointer-events-none shadow-lg shadow-black/25 transition ease-in-out duration-250'
    let arrowDirection = null
    let arrowClasses = "relative flex flex-col items-center px-5 py-2 after:content-[''] after:w-3 after:h-3 after:absolute after:bg-back"

    if(position == 'above-left') {
      classes += ' -top-full left-0'

      arrowDirection = 'down'
    } else if(position == 'above') {
      classes += ' -top-full left-1/2 -translate-x-1/2'

      arrowDirection = 'down'
    } else if(position == 'above-right') {
      classes += ' -top-full right-0'

      arrowDirection = 'down'
    } else if(position == 'below-left') {
      classes += ' top-full left-0'

      arrowDirection = 'up'
    } else if(position == 'below') {
      classes += ' top-full left-1/2 -translate-x-1/2'

      arrowDirection = 'up'
    } else if(position == 'below-right') {
      classes += ' top-full right-0'

      arrowDirection = 'up'
    } else if(position == 'left-top') {
      classes += ' left-0 -translate-x-full top-0'

      arrowDirection = 'right'
    } else if(position == 'left') {
      classes += ' left-0 -translate-x-full top-1/2 -translate-y-1/2'

      arrowDirection = 'right'
    } else if(position == 'left-bottom') {
      classes += ' left-0 -translate-x-full bottom-0'

      arrowDirection = 'right'
    } else if(position == 'right-top') {
      classes += ' right-0 translate-x-full top-0'

      arrowDirection = 'left'
    } else if(position == 'right') {
      classes += ' right-0 translate-x-full top-1/2 -translate-y-1/2'

      arrowDirection = 'left'
    } else if(position == 'right-bottom') {
      classes += ' right-0 translate-x-full bottom-0'

      arrowDirection = 'left'
    }

    if(arrowDirection == 'left') {
      arrowClasses += ' after:rotate-45 after:top-1/2 after:-translate-y-1/2 after:left-0 after:-translate-x-1/2 after:border-l after:border-b after:border-white'
    } else if(arrowDirection == 'right') {
      arrowClasses += ' after:rotate-45 after:top-1/2 after:-translate-y-1/2 after:right-0 after:translate-x-1/2 after:border-r after:border-t after:border-white'
    } else if(arrowDirection == 'up') {
      arrowClasses += ' after:rotate-45 after:top-0 after:-translate-y-1/2 after:border-l after:border-t after:border-white'
    } else if(arrowDirection == 'down') {
      arrowClasses += ' after:rotate-45 after:bottom-0 after:translate-y-1/2 after:border-r after:border-b after:border-white'
    }

    return (
      <CSSTransition in={show} nodeRef={nodeRef} timeout={100} unmountOnExit>
        {state => (
          <div className={classes} ref={nodeRef} style={transitionStyles[state]}>
            <div className={arrowClasses}>
              {title && <p className="
                text-m
                text-white/50
                leading-none
                whitespace-nowrap
              ">{ title }</p>}
              <p className="
                whitespace-nowrap
              ">{ text }</p>
            </div>
          </div>
        )}
      </CSSTransition>
    )
  }
