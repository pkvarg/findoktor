import React from 'react'
import { InlineWidget } from 'react-calendly'

const Meeting = () => {
  return (
    <div className='text-[#ffffff]'>
      <h1 className='text-[35px] text-center'>Bezplatné stretnutie</h1>
      <div className=''>
        <InlineWidget url='https://calendly.com/petru82' />
      </div>
    </div>
  )
}

export default Meeting
