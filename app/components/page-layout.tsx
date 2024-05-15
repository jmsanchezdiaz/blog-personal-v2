import React, { PropsWithChildren } from 'react'
import Navigation from './navigation'
import Footer from './footer'

const PageLayout = ({ children, className = "" }: PropsWithChildren<{
  className?: string
}>) => {
  return (
    <main className={'layout ' + className}>
      <div>
        <Navigation />
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default PageLayout
