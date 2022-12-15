import React from 'react'
import { usePathname } from 'next/navigation'

export function AddressBar() {
  const pathname = usePathname()

  return (
    <div className="items-center px-5 py-3">
      <div className="flex flex-col text-sm font-medium">
        {pathname ? (
          <>
            {pathname
              .split('/')
              .slice(2, 4)
              .map((segment, index) => {
                return (
                  <React.Fragment key={segment}>
                    {index == 0 && (
                      <p
                        key={segment}
                        className="px-0.5 text-lg leading-none text-white/50"
                      >
                        {segment}
                      </p>
                    )}
                    {index >= 1 && (
                      <p
                        key={segment}
                        className="px-0.5 text-2xl leading-none text-white"
                      >
                        {segment}
                      </p>
                    )}
                  </React.Fragment>
                )
              })}
          </>
        ) : null}
      </div>
      <div></div>
    </div>
  )
}
