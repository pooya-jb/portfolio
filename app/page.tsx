import Contact from '@/components/main/Contact';
import Encryption from '@/components/main/Encryption';
import Hero from '@/components/main/Hero';
import Projects from '@/components/main/Projects';
import Skills from '@/components/main/Skills';
import StarsCanvas from '@/components/main/StarBackground';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='h-full w-full'>
      <StarsCanvas />
      <div className='flex flex-col gap-10'>
        <Hero />
        <Skills />
        {/* <Encryption /> */}
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
