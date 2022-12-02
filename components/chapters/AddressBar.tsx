import React from 'react';
import { usePathname } from 'next/navigation';

export function AddressBar() {
  const pathname = usePathname();

  return (
    <div className="items-center px-5 py-3">
      <div className="flex text-sm font-medium">
        {pathname ? (
          <>
            {pathname
              .split('/')
              .slice(2,4)
              .map((segment, index) => {
                return (
                  <React.Fragment key={segment}>
                    <div className='flex flex-col flex-wrap justify-center items-center'>
                      <div>
                        {index == 0  && <span
                          key={segment}
                          className='px-0.5 text-lg text-white/50'
                        >
                          {segment}
                        </span> }
                      </div>
                      <div>
                      {index >= 1  && <span
                        key={segment}
                        className='px-0.5 text-2xl text-white'
                      >
                        {segment}
                      </span> }
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
          </>
        ) : null}
      </div>
      <div>
        </div>
    </div>
  );
}