"use server";

import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import DarkModeButton from './dark-mode-button';
import { cookies } from 'next/headers';
import { Theme } from '../types';
import { toggleTheme } from '../actions';
import { FaPenToSquare } from "react-icons/fa6";

const Navigation = () => {
  const theme = cookies().get("theme")?.value as Theme || "light"
  return (
    <header className="flex items-center justify-between ">
      <Link href="/">
        <Logo className='w-20 h-20 icon' />
      </Link>

      <div className="flex items-center gap-4">
        {/* TODO: Mostrar solamente si esta logueado como admin */}
        <Link href="/posts/create" className="text-2xl icon">
          <FaPenToSquare />
        </Link>
        <DarkModeButton theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  )
}

export default Navigation
