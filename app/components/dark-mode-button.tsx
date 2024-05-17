"use client"
import React from 'react'
import { CiDark, CiLight } from 'react-icons/ci'
import { Theme } from '../types'

interface Props {
  theme: Theme
  toggleTheme: () => Promise<void>
}

const DarkModeButton = ({ theme, toggleTheme }: Props) => {
  return (
    <button aria-label="toggle theme" onClick={async () => {
      await toggleTheme()
    }} className='text-4xl icon'>
      {theme === "dark" ? <CiDark /> : <CiLight />}
    </button>
  )
}

export default DarkModeButton
