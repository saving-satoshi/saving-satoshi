import { Footer } from 'components/Footer';
import { Navbar } from '../../components/NavBar';
import { Chapters } from './chapters';

export default async function ChaptersPage() {
    return (
        <>
            <Navbar/>
            <div className="w-screen">
                <div className='px-6'>
                    <div className='text-white flex justify-center flex-col'>
                        <h1 className='text-6xl sm:text-7xl lg:text-8xl text-center pt-20 px-2.5'>Chapters</h1>
                        <p className='text-2xl sm:text-3xl lg:text-4xl text-center pt-4 pb-20'>Explore the mysteries of Satoshi and learn about Bitcoin along the way.</p>
                    </div>
                    <section>
                        {/* @ts-expect-error Server Component */}
                        <Chapters/>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    )
    
  }
