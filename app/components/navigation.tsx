import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import dynamic from 'next/dynamic';

const DarkModeButton = dynamic(() => import('./dark-mode-button'), {
  ssr: false
});

const Navigation = () => {
  return (
    <header className="flex align-middle justify-between ">
      <Link href="/">
        <Logo className='w-20 h-20 dark:fill-white fill-black' />
      </Link>

      <DarkModeButton />
    </header>
  )
}

export default Navigation
