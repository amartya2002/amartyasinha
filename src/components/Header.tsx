"use client";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import classNames from "classnames";
import { usePathname } from "next/navigation";
function Header() {
  const pathName = usePathname();
  return (
    <header className="  w-full top-0 max-w-7xl mx-auto ">
      {/* <div className='  w-full flex justify-center items-center 
       '>

      <div className='bg-black bg-opacity-75 backdrop-filter backdrop-blur-lg  px-6 py-3 rounded-xl shadow-xl hover:scale-105 duration-500 opacity-70  '>
        <div className="flex space-x-5  justify-center z-92 ">
          {headerNavLinks.map(({ title, href }) => {
            const active = pathName?.includes(href);
            return (
              <Link
                prefetch
                key={title}
                href={href}
                className={classNames('horizontal-underline text-base', {
                  'horizontal-underline-active': active,
                })}
                aria-label={title}
              >
                <span className=" tracking-tight text-gray-900 dark:text-gray-500 font-semibold hover:dark:text-gray-400 duration-300 active:dark:text-red-400  ">
                  {title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      </div> */}
      <div className="flex items-center justify-between h-full px-6 py-12 md:px-16">
        
        <p className=" tracking-tight text-3xl dark:text-zinc-200 gap-2 flex items-baseline">
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

        <ThemeSwitch />
      </div>
    </header>
  );
}

export default Header;
