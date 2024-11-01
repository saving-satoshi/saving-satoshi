import { useState } from 'react'
import { SuccessNumbers } from 'ui/common/StatusBar'
import WhiteCheck from './icons/WhiteCheck'
import Loader from './Loader'

export default function SignatureButton({
  children,
  style,
  disabled,
  classes,
  onClick,
  returnSuccess,
  laszloWillNotSign,
}: {
  children: any
  style?: string
  disabled?: boolean
  classes?: string
  onClick?: any
  returnSuccess: SuccessNumbers
  laszloWillNotSign?: boolean
}) {
  let className = `inline-block justify-center px-12 text-center font-nunito font-bold transition duration-150 ease-in-out ${
    returnSuccess === 5 && '!bg-transparent '
  }`

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
  } else {
    className += ''

    if (disabled || returnSuccess === 5) {
      className += ' bg-white text-back opacity-50'
    } else {
      className += ' bg-white text-back hover:bg-white/75'
    }
  }

  // Disable clicking
  if (disabled) {
    className += ' pointer-events-none'
  }

  // Append custom classe, useful for layout like margins
  if (classes) {
    className += ' ' + classes
  }

  const [isLoading, setIsLoading] = useState(false)

  if (laszloWillNotSign && returnSuccess === 5) {
    return (
      <button
        disabled
        className="cursor-not-allowed rounded-[3px] border border-white/15 px-2.5 py-[3px]  font-space-mono font-bold text-white opacity-50"
      >
        Pending
      </button>
    )
  }
  return (
    <button
      onClick={() => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 1000)
        onClick()
      }}
      className={className}
      disabled={disabled || returnSuccess === 5}
    >
      <>
        {isLoading && (
          <>
            <Loader className="h-6 w-6 text-black" />
          </>
        )}
        {!isLoading && (returnSuccess === 5 ? <WhiteCheck /> : children)}
      </>
    </button>
  )
}
