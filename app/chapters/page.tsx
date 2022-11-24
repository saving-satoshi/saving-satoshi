import { Footer } from 'components/Footer';
import { Navbar } from '../../components/NavBar';
import { Chapters } from './chapters';

export default async function ChaptersPage() {
    return (
        <>
            <Navbar/>
            <div className='text-white flex justify-center flex-col w-screen'>
                <h1 className='text-6xl sm:text-7xl lg:text-8xl text-center pt-20 px-2.5'>Chapters</h1>
                <p className='text-2xl sm:text-3xl lg:text-4xl text-center pt-4 pb-20'>Time travel through the history of bitcoin  and learn bitcoin coding along the way.</p>
            </div>
            <section>
                {/* @ts-expect-error Server Component */}
                <Chapters/>
            </section>
            <Footer/>
        </>
    )
    
  }
