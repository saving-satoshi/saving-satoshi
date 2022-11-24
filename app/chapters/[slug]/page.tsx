import Image from "next/image"
import { allChapters, Chapter, Introduction, allIntroductions } from 'contentlayer/generated'
import Link from "next/link"

//TODO define better load

async function _getIntro(slug: string) {
    const intro = await allIntroductions.find((intro: Introduction) =>
        intro.slugAsParams === slug
    )
    return intro
}

export async function getIntro(slug: string) {
    const chapter = await allChapters.find((chapter: Chapter) => chapter.slugAsParams === slug)
    const intro = await _getIntro(chapter.intro[0])
    return intro;
}

export default async function Page({ params }) {
    const intro = await getIntro(params.slug)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-screen justify-center'>
            <div className='flex justify-start w-full text-white '>
                <div className='content-center justify-items-start sm:p-10 px-1 py-6 sm:py-36'>
                    <div
                        dangerouslySetInnerHTML={{ __html: intro.body.html }}
                        className='pt-8 text-xl'
                    ></div>
                    <div className='pt-8'>
                        <Link
                            href='/chapters/chapter-1/genesis'
                            className='py-2.5 px-12 w-full md:w-auto justify-center bg-white text-base-blue text-2xl'>
                            Start
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <Image
                    src={intro.image}
                    alt={intro.title}
                    width={1440}
                    height={715}
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
        </div>
    )

}
