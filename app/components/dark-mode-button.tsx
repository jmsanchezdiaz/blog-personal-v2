"use client"
import React, { useEffect, useState } from 'react'
import { CiDark, CiLight } from 'react-icons/ci'
import { Theme } from '../types'

const DarkModeButton = () => {
  const initTheme = window.localStorage.getItem("theme") as Theme ?? "light"
  const [theme, setTheme] = useState<Theme>(initTheme)

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
    window.localStorage.setItem("theme", theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    if (theme === "dark") {
      window.document.documentElement.classList.remove("light")
      window.document.documentElement.classList.add("dark")
    } else {
      window.document.documentElement.classList.remove("dark")
      window.document.documentElement.classList.add("light")
    }
  }, [theme])

  return (
    <button aria-label="toggle theme" onClick={changeTheme} className='text-4xl dark:text-white'>
      {theme === "dark" ? <CiDark /> : <CiLight />}
    </button>
  )
}

export default DarkModeButton
