import { Chapter } from "contentlayer/generated"
import Image from "next/image"

export const OverviewImage = (chapter: Chapter) => {
    return(
        <Image
            src={chapter.image}
            alt={chapter.title}
            width={1440}
            height={715}
            layout="responsive"
            objectFit="contain"
        />
    )
}