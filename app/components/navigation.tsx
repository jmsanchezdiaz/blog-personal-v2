"use server";

import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import DarkModeButton from './dark-mode-button';
import { cookies } from 'next/headers';
import { Theme } from '../types';
import { toggleTheme } from '../actions';

const Navigation = () => {
  const theme = cookies().get("theme")?.value as Theme || "light"
  return (
    <header className="flex align-middle justify-between ">
      <Link href="/">
        <Logo className='w-20 h-20 dark:fill-white fill-black' />
      </Link>

      <DarkModeButton theme={theme} toggleTheme={toggleTheme} />
    </header>
  )
}

export default Navigation
