
import Hero from '@/components/Hero';
import { ReactElement, useContext, useEffect, useRef } from 'react';
import { ScrollProvider } from '@/components/Providers/ScrollProvider';
import Intro from '@/components/Intro';


export default function Page() {

  return (
    <ScrollProvider>
      <Hero />
      <Intro/>
    </ScrollProvider>

  )
}
