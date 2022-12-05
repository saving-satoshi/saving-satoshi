'use client';

import type { Item } from './TabGroup';
import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export const Tab = ({
  path,
  item: { slug, text },
}: {
  path: string;
  item: Item;
}) => {
  const segment = useSelectedLayoutSegment();
  const href = slug ? path + '/' + slug : path;
  const isActive =
    (!slug && segment === null) ||
    segment === slug;
  
  return (
    <Link
      href={href} 
      className={clsx('flex justify-center text-center mt-2  px-12 w-full md:w-auto text-lg', {
        'text-white text-opacity-75 border-2 border-black/25 hover:text-opacity-50':
          !isActive,
        'bg-black bg-opacity-25 text-white': isActive,
      })}
    >
      {text}
    </Link>
  );
};