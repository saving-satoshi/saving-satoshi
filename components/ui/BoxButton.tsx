import Link from 'next/link'

export const BoxButton = ({ href, children, title, style, size, disabled, external, classes, onClick }: { href?: string, children: any, title?: string, style?: string, size?: string, disabled?: boolean, external?: boolean, classes?:string, onClick?: any }) => {

  const isLink = href !== undefined
  let className = "w-full inline-block justify-center px-12 text-center font-nunito font-bold transition duration-150 ease-in-out md:w-auto"

  // Apply visual style classes
  if(style == 'outline') {
    // White outline, white text
    className += ' border'

    if(disabled) {
      className += ' text-white/50 border-white/50'
    } else {
      className += ' text-white hover:bg-black/25'
    }
  } else if(style == 'dark') {
    // Black background with opacity, white text
    className += ' bg-black/15'

    if(disabled) {
      className += ' text-white/50'
    } else {
      className += ' text-white hover:bg-black/50'
    }
  } else {
    // Filled white background, dark text
    className += ''

    if(disabled) {
      className += ' bg-white/50 text-black/50'
    } else {
      className += ' bg-white text-black hover:bg-white/75'
    }
  }

  // Disable clicking
  if(disabled) {
    className += ' pointer-events-none'
  }

  // Apply size classes
  if(size == 'small') {
    className += ' text-xl py-2.5'
  } else if(size == 'big') {
    className += ' text-2xl py-4'
  } else {
    className += ' text-2xl py-2.5'
  }

  // Append custom classe, useful for layout like margins
  if(classes) {
    className += ' '+classes
  }

  if(isLink) {
    // Render as link
    return (
      <Link
        href={href}
        className={className}
        title={title}
        rel={external ? 'noreferrer nofollow' : null}
        target={external ? '_blank' : null}
      >
        {children}
      </Link>
    )
  } else {
    // Render as button
    return (
      <button
        onClick={onClick}
        className={className}
        disabled={disabled}
        title={title}
      >
        {children}
      </button>
    )
  }
}
