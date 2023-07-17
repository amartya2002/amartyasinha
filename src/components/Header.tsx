import React from 'react'
import ThemeSwitch from './ThemeSwitch'
function Header() {
  return (
    <header className='flex'>
        <div>Portfolio</div>
        <ThemeSwitch/>
    </header>
  )
}

export default Header