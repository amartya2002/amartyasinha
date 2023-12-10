"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactElement, useContext, useEffect, useRef } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { ScrollContext } from "./Providers/ScrollProvider";
import { renderCanvas } from "./renderCanvas";
import heroData from "@/data/heroData.json";

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div>
      <h1 className="sr-only">
        Hello I&apos;m Amartya SInha, I&apos;m a software developer, and I love
        building cool interfaces for the web.
      </h1>
      <motion.div
        className="relative z-10 flex h-[calc(100vh-180px)] items-center md:h-[calc(100vh+38px)]"
        animate={{
          transform: `translateY(${progress * 20}vh)`,
        }}
        transition={{ type: "spring", stiffness: 65 }}
      >
        <div className="mx-auto w-screen max-w-7xl px-6 md:p-16">
          <div className="sm:-mt-[6rem] -mt-[8rem]">
            <div ref={ref} className="flex cursor-default flex-col space-y-2">
              {heroData.map((data, index) => (
                <div className="mb-4" key={index}>
                  <h1 className="md:text-[5.9rem]  text-6xl font-bold mb-4 tracking-tight ">
                    <p className="fodnt-serif">{data.titleline1}</p>
                    <p className="fodnt-serif">{data.titleline2}</p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-900 font-sderif ">
                      {data.titleline3}
                    </p>
                  </h1>
                  <h2 className="dark:text-zinc-400 text-zinc-500 text-lg max-w-lg ">
                    {data.subtitle}
                  </h2>
                </div>
              ))}

              {/* <div className='flex gap-4 font-semibold '><Link
                href="/about"
                className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-xl text-gray-600"
              >
                Read more 
              </Link>
              <Link
                href="https://drive.google.com/file/d/1q-1OKmv5wOnPSHG2h2pWOuvqO1eRM-AS/view?usp=sharing"
                className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-xl text-gray-600"
              >
                Resume
              </Link></div> */}

              <Link
                href="/"
                className=" text-center  w-[100%] sm:w-[30%]  py-2.5 dark:text-zinc-600 text-white font-semibold dark:bg-white bg-zinc-900 rounded-full hover:scale-105 duration-200"
              >
                Get in touch &#x2727;
              </Link>
              <Link
                href="/"
                className=" text-center  w-[100%] sm:w-[30%]  py-2.5 dark:text-zinc-300 font-semibold  border dark:border-zinc-800 rounded-full hover:scale-105 hover:text-blue-500 dark:hover:bg-zinc-900 duration-200"
              >
                Resume &#x274F;
              </Link>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8">
              <div
                role="presentation"
                className="flex cursor-pointer flex-col items-center justify-center"
                onClick={() => {
                  const intro = document.querySelector("#intro");

                  intro?.scrollIntoView({ behavior: "smooth" });
                }}
              ></div>
            </div>
          </div>
        </div>
      </motion.div>
      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0"
        id="canvas"
      ></canvas>
    </div>
  );
}
