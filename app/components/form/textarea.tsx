import React, { TextareaHTMLAttributes } from 'react'
import FormError from './form-error'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxLength?: number
  currentLength?: number,
  errorMessage?: string
}

const Textarea = ({ currentLength, maxLength, errorMessage, ...rest }: Props) => {
  const showCount = maxLength !== undefined && currentLength !== undefined

  return (
    <div>
      <div className='relative'>
        <textarea {...rest} />
        {
          showCount &&
          <div className='absolute bottom-2 right-2 text-gray-500'>
            <span>{currentLength}</span> / {maxLength}
          </div>
        }
      </div>
      <FormError>
        {errorMessage}
      </FormError>
    </div>
  )
}

export default Textarea
