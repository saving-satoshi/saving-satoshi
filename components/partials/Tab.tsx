'use client';

import type { Item } from './TabGroup';
import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export const Tab = ({
  path,
  item: { slug, text, opt },
}: {
  path: string;
  item: Item;
}) => {
  const segment = useSelectedLayoutSegment();
  let href = slug ? path + '/' + slug : path;
  href = opt ? href + '/' + opt : path;
  const isActive =
    (!slug && segment === null) ||
    segment === slug;

  return (
    <Link
      href={href} 
      className={clsx('mt-2 px-3 py-1 text-lg justify-center text-center flex px-12 w-full md:w-1/2', {
        'text-white text-opacity-75 border-2 border-black/25 hover:text-opacity-50':
          !isActive,
        'bg-black bg-opacity-25 text-white': isActive,
      })}
    >
      {text}
    </Link>
  );
};