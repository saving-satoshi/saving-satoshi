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

async function getIntro(slug: string) {
    const chapter = await allChapters.find((chapter: Chapter) => chapter.slugAsParams === slug)
    const intro = await _getIntro(chapter.intro[0])
    return intro;
}

export default async function Page({ params }) {
    const intro = await getIntro(params.slug)
    return (
        <div className="w-screen min-h-screen flex grow">
            <div className='flex grow justify-center px-6 lg:px-0'>
                <div className='flex basis-1/2 shrink justify-start w-full text-white '>
                    <div className='content-center flex flex-col justify-items-start sm:p-10 px-1 py-1 sm:py-1'>
                        <div
                            dangerouslySetInnerHTML={{ __html: intro.body.html }}
                            className='pt-8 intro'
                        ></div>
                        <div className='mt-8'>
                            <Link
                                href='/chapters/chapter-1/genesis'
                                className='inline-block py-2.5 px-12 w-full md:w-auto justify-center bg-white text-base-blue text-2xl font-nunito font-bold transition ease-in-out duration-150 hover:opacity-75'>
                                Start
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex basis-1/2 shrink justify-center border-l border-white/25'>
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
        </div>
    )

}
