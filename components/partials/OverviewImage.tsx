import { Chapter } from 'contentlayer/generated'
import Image from 'next/image'

export const OverviewImage = ({image, title}: {image: string, title: string}) => {
  return (
    <Image
      src={image}
      alt={title}
      width={600}
      height={600}
      className="w-full h-full object-cover"
    />
  )
}
