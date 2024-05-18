import React, { InputHTMLAttributes } from 'react'
import FormError from './form-error'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  currentLength?: number
  maxLength?: number

}

// TODO: Refactor Classes Logic

const Input = ({ errorMessage, currentLength, maxLength, className, ...rest }: Props) => {
  const showCount = currentLength !== undefined && maxLength !== undefined
  const inputClassName = className ? className.concat(
    showCount ? " input rounded-l-md" : " input-rounded"
  ) : className
  return (
    <div>
      <div className='flex items-center'>
        <input {...rest} className={inputClassName} />
        {
          showCount &&
          <div className='flex-shrink-0  p-2 rounded-r-md bg-gray-300 text-gray-500'>
            {currentLength} / {maxLength}
          </div>
        }
      </div>
      <FormError>
        {errorMessage}
      </FormError>
    </div>
  )
}

export default Input
