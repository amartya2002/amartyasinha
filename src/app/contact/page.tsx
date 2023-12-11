"use client"
import Link from 'next/link';
import React from 'react'

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto  md:px-20 px-8 py-12">

    <div className="">
      <p className="text-xl font-medium tracking-tight dark:text-zinc-200  ">Let&apos;s talk</p>
      <div className="my-8">
        <p className="dark:text-zinc-400 mb-2 text-zinc-500">
          Github{" "}
          <Link target="_blank"
            className="dark:text-zinc-300 text-zinc-800 hover:text-orange-300 duration-300"
            href="https://github.com/amartya2002"
          >
            @amartya &#8599;
          </Link>
        </p>
        <p className="dark:text-zinc-400 mb-2 text-zinc-500">
          Linkedin{" "}
          <Link target="_blank"
            className="dark:text-zinc-300 hover:text-orange-300 text-zinc-800 duration-300"
            href="https://www.linkedin.com/in/amartya99/"
          >
            @amartya &#8599;
          </Link>
        </p>
        <p className="dark:text-zinc-400 mb-2 text-zinc-500">
          Twitter{" "}
          <Link target="_blank"
            className="dark:text-zinc-300 hover:text-orange-300 text-zinc-800 duration-300"
            href="https://twitter.com/amartyaSinha100"
          >
            @amartya &#8599;
          </Link>
        </p>
        <p className="dark:text-zinc-400 mb-2 text-zinc-500">
          Leetcode{" "}
          <Link target="_blank"
            className="dark:text-zinc-300 hover:text-orange-300 text-zinc-800 duration-300"
            href="https://leetcode.com/amartya_sinha/"
          >
            @amartya &#8599;
          </Link>
        </p>
      </div>

      <div className="text-zinc-500 text-lg max-w-lg mb-8">
          <p>
            Interested in collaborating or discussing job opportunities? Reach
            out at
            <Link
              className="dark:text-zinc-300 hover:text-orange-300 text-zinc-800 duration-300"
              href="#"
              onClick={(e) => {
                window.location.href = "mailto:amartyasinha2202@gmail.com";
                e.preventDefault();
              }}
            >
              {" "}
              amartyasinha2002@gmail.com &#8599;
            </Link>
          </p>
          <p>Let&apos;s create something amazing together!</p>
        </div>

      <div className="pt-3">
      <p className=" tracking-tight text-2xl dark:text-zinc-200 gap-1 flex items-center">
        <span>
          <svg
            width="23"
            height="23"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>

        Amartya.
      </p>
        <p className="dark:text-zinc-400 text-zinc-500">Crafted by Amartya Sinha.</p>
      </div>
    </div>

  </div>
  )
}
