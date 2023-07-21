
import Hero from '@/components/Hero';
import { ReactElement, useContext, useEffect, useRef } from 'react';
import { ScrollProvider } from '@/components/Providers/ScrollProvider';
import Intro from '@/components/Intro';
import Works from '@/components/Works/Works';


export default function Page() {

  return (
    <ScrollProvider>
      <Hero />
      <Intro/>
      <Works/>
    </ScrollProvider>

  )
}
