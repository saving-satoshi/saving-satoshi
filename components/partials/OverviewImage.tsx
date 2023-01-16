import { Chapter } from 'contentlayer/generated'
import Image from 'next/image'

export const OverviewImage = (chapter: Chapter) => {
  return (
    <Image
      src={chapter.image}
      alt={chapter.title}
      width={600}
      height={600}
      className="w-full h-full object-cover"
    />
  )
}
