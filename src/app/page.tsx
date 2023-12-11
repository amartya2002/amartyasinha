"use client";
import Hero from "@/components/Hero";
import { ScrollProvider } from "@/components/Providers/ScrollProvider";
import Intro from "@/components/Intro";
import Works from "@/components/Works/Works";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <ScrollProvider>
      <Hero />
      <Intro />
      <Works />
      <Footer />
    </ScrollProvider>
  );
}
