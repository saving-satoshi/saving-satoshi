import { useState } from 'react'
import { Signatures } from 'ui/lesson/TransactionsChallenge'
import WhiteCheck from './icons/WhiteCheck'
import Loader from './Loader'

export default function SignatureButton({
  href,
  children,
  title,
  style,
  size,
  disabled,
  classes,
  onClick,
  full,
  round,
  signature,
}: {
  href?: string
  children: any
  title?: string
  style?: string
  size?: string
  disabled?: boolean
  external?: boolean
  classes?: string
  onClick?: any
  full?: boolean
  round?: boolean
  signature?: Signatures
}) {
  let className = `inline-block justify-center px-12 text-center font-nunito font-bold transition duration-150 ease-in-out ${
    full ? 'w-full' : 'md:w-auto'
  } ${signature === 'signed' && '!bg-transparent '}`

  // Apply visual style classes
  if (style == 'outline') {
    // White outline, white text
    className += ' border'

    if (disabled) {
      className += ' text-white/50 border-white/50'
    } else {
      className += ' text-white hover:bg-black/25'
    }
  } else if (style == 'dark') {
    // Black background with opacity, white text
    className += ' bg-black/15'

    if (disabled) {
      className += ' text-white/50'
    } else {
      className += ' text-white hover:bg-black/50'
    }
  } else if (style == 'green') {
    // Green background with opacity, green text
    className += ' bg-green/20'

    if (disabled) {
      className += ' text-green/50'
    } else {
      className += ' text-green hover:bg-green/25'
    }
  } else if (style == 'faded') {
    // White Background with opacity,
    className += ' bg-white/25'

    if (disabled) {
      className += ' text-[#543160]'
    } else {
      className += ' text-[#543160] hover:bg-white/75'
    }
  } else {
    // Filled white background, dark text
    className += ''

    if (disabled) {
      className += ' bg-white text-back opacity-50'
    } else {
      className += ' bg-white text-back hover:bg-white/75'
    }
  }

  // Disable clicking
  if (disabled) {
    className += ' pointer-events-none'
  }

  // Apply size classes
  if (size == 'small') {
    className += ' text-xl py-2.5'
  } else if (size == 'tiny') {
    className += ' text-sm py-2'
  } else if (size == 'big') {
    className += ' text-2xl py-4'
  } else {
    className += ' text-2xl py-2.5'
  }

  // Append custom classe, useful for layout like margins
  if (classes) {
    className += ' ' + classes
  }

  if (round) {
    className += ' rounded'
  }

  const [isLoading, setIsLoading] = useState(false)
  return (
    <button
      onClick={() => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 2000)
        onClick()
      }}
      className={className}
      disabled={disabled}
      title={title}
    >
      <>
        {isLoading && (
          <>
            <Loader className="h-6 w-6 text-black" />
          </>
        )}
        {!isLoading && (signature == 'signed' ? <WhiteCheck /> : children)}
      </>
    </button>
  )
}
