import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex border-t-[0.5px] border-black pt-4 dark:border-white justify-center text-gray-700 dark:text-gray-500 pb-8">
      <p>Copyright © {currentYear} - Developed by
        {" "}
        <a className="link" target='_blank' href="https://www.linkedin.com/in/juan-manuel-sanchez-diaz/">
          Juan Manuel Sanchez Diaz
        </a>
      </p>
    </footer >
  )
}

export default Footer
