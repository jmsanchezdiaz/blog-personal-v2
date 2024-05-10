import React, { PropsWithChildren } from 'react'
import Navigation from './navigation'

const PageLayout = ({ children, className = "" }: PropsWithChildren<{
  className?: string
}>) => {
  return (
    <main className={'layout ' + className}>
      <Navigation />
      {children}
    </main>
  )
}

export default PageLayout
