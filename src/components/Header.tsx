"use client"
import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import SectionContainer from './SectionContainer';
import headerNavLinks from '../../data/headerNavLinks'
function Header() {
  const pathName = usePathname();
  return (
    <header className=" h-32 ">
      <div className=' h-32 w-full flex justify-center items-center 
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
      </div>
     
    </header>

  )
}

export default Header