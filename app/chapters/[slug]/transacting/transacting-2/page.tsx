import { allLessons, Lesson } from 'contentlayer/generated'

//Am i going to to this boilerplate for every view? 
// TODO make a factory (or other pattnern) to populate component data

async function getTx2() {
    const slug = 'transacting-2'
    const data = await allLessons.find((challenge: Lesson) => challenge.slugAsParams === slug)
    return data
}

export default async function Genesispt2() {
    const genesis = await getTx2()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-screen justify-center'>
            <div className='flex justify-center w-full text-white'>
                <div className='content-center justify-items-start sm:px-12 px-1 py-6'>
                <div
                    className='genesis-p2'
                    dangerouslySetInnerHTML={{ __html: genesis.body.html }}
                ></div>
                </div>
            </div>
            <div className='flex justify-center w-full text-white'>
                <div id='terminal'></div>
            </div>
            <script>
                var term = new Terminal();
                term.open(document.getElementById('terminal'));
                term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
            </script>
        </div>
    )

}