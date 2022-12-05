'use client';

import type { Item } from './TabGroup';
import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export const Tab = ({
  path,
  item: { slug, id },
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
      className={clsx('hover:bg-blue-700 hover:text-white px-5 text-center border-x border-white/50 text-sm ', {
        'text-white text-opacity-50 hover:text-opacity-50':
          !isActive,
        'bg-black bg-opacity-25 text-white': isActive,
      })}
    >
      {id}
    </Link>
  );
};