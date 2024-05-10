import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
import { Theme } from '../types';

const DarkModeButton = dynamic(() => import('./dark-mode-button'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

const Navigation = () => {
  const cookiesStore = cookies()
  const theme = cookiesStore.get("theme")?.value as Theme

  return (
    <header className="flex align-middle justify-between ">
      <Link href="/">
        <Logo className='w-20 h-20 dark:fill-white fill-black' />
      </Link>

      <DarkModeButton initTheme={theme} />
    </header>
  )
}

export default Navigation
