import React from 'react';
import { usePathname } from 'next/navigation';

export function AddressBar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center space-x-2 px-5 py-3">
      <div className="flex space-x-1 text-sm font-medium">
        <div>
        </div>
        {pathname ? (
          <>
            <span className="text-gray-600">/</span>
            {pathname
              .split('/')
              .slice(2)
              .map((segment) => {
                return (
                  <React.Fragment key={segment}>
                    <span>
                      <span
                        key={segment}
                        className="animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 py-0.5 text-gray-100"
                      >
                        {segment}
                      </span>
                    </span>
                    <span className="text-gray-600">/</span>
                  </React.Fragment>
                );
              })}
          </>
        ) : null}
      </div>
    </div>
  );
}