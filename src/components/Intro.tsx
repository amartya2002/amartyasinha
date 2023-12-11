"use client";

import { useLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef, useState } from "react";

function opacityForBlock(sectionProgress: number, blockNumber: number) {
  const progress = sectionProgress - blockNumber;

  if (progress >= 0 && progress < 1) {
    return 1;
  }

  return 0.2;
}

export default function Intro() {
  const [scrollY, setScrollY] = useState(0);

  useLenis(({ scroll }: any) => {
    setScrollY(scroll);
  });

  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages = 4;
  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;

    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
   
    <div
      ref={refContainer}
      className="relative z-10 bg-white text-zinc-800 dark:bg-[#0a0a0a]  dark:text-zinc-200 mt-6 "
      id="intro"
    >
      <div className="mx-auto max-w-7xl px-8 py-16 md:px-20 md:py-40 text-4xl font-semibold tracking-tight  md:text-6xl ">
        <div className="leading-tighter">
          <div
            className="introText mb-3"
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            Hi, I&apos;m Amartya,
          </div>
          <span
            className="introText inline-block after:content-['_'] mb-3"
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Bringing ideas to life with pixel-perfect precision.
          </span>
          <span
            className="introText inline-block mb-3"
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            Crafting exceptional experiences through thoughtful design.
          </span>

          <span
            className="introText inline-block"
            style={{ opacity: opacityForBlock(progress, 3) }}
          >
            Elevate your digital presence with my creative touch.
          </span>
        </div>
      </div>
    </div>
  );
}
