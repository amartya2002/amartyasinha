"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactElement, useContext, useEffect, useRef } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { ScrollContext } from "./Providers/ScrollProvider";
import { renderCanvas } from "./renderCanvas";

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
              <div className="mb-4">
                <h1 className="md:text-[5.9rem]  text-6xl font-bold mb-3 tracking-tight ">
                  Designing <br /> web with <br />
                  code.
                </h1>
                <h2 className="dark:text-zinc-400 text-zinc-500 text-lg max-w-xl ">
                  Bringing designs to life through code, a frontend developer
                  who&apos;s all about creating dynamic, responsive websites that
                  delivers immersive user experiences.
                </h2>
              </div>

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
                className=" text-center  w-[100%] sm:w-[30%]  py-2.5 dark:text-zinc-600 text-white font-semibold dark:bg-white bg-zinc-900 rounded-full"
              >
                Get in touch
              </Link>
              <Link
                href="/"
                className=" text-center  w-[100%] sm:w-[30%]  py-2.5 dark:text-zinc-300 font-semibold  border dark:border-zinc-800 rounded-full"
              >
                Resume
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
