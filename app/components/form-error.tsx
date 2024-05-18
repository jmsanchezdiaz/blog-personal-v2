import React, { PropsWithChildren } from 'react'

const FormError = ({ children }: PropsWithChildren) => {
  return (
    <span className='inline-block ml-2 mt-2 text-sm text-red-500'>
      {children}
    </span>
  )
}

export default FormError
