import React, { PropsWithChildren } from 'react'
import Navigation from './navigation'

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className='min-h-screen px-4 space-y-6 container max-w-screen-lg mx-auto'>
      <Navigation />
      {children}</main>
  )
}

export default PageLayout
