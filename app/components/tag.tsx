import React from 'react'
import { RxCross2 } from 'react-icons/rx'

interface Props {
  tag: string
  index: number
  onClear: (index: number) => void

}

const Tag = ({
  tag,
  index,
  onClear
}: Props) => {
  return (
    <div className='inline-flex items-center gap-1 bg-green-300 text-white border-2  rounded-lg py-[0.20rem] px-2'>
      <span>{tag}</span>
      <button type="button" key={index} aria-label="Remove tag" className='font-bold' onClick={() => onClear(index)}>
        <RxCross2 />
      </button>
    </div>
  )
}

export default Tag
