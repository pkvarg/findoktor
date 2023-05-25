import React from 'react'
import { StickyNavBlog } from '../components'

const Blog = () => {
  return (
    <>
      <StickyNavBlog />
      <div className='bg-[#013bb0] relative' id='blog'>
        <div className='mt-[-5%] lg:mt-0 py-[5%]'>
          <h1 className='uppercase text-[#007ad6] text-[30px] text-center'>
            Blog
          </h1>
        </div>
      </div>
    </>
  )
}

export default Blog
