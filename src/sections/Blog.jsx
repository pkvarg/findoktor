import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStateContext } from '../context/StateContext'

import SinglePostIntro from '../components/SinglePostIntro'

const Blog = () => {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id
  const { allBlogs } = useStateContext()

  return (
    <>
      <div className='bg-[#013bb0] pb-12 four' id='blog'>
        <div className='mt-[-5%] lg:mt-0'>
          <h1
            className='uppercase text-[#007ad6] text-[30px] text-center cursor-pointer'
            onClick={() => navigate('/blog')}
          >
            Blog
          </h1>
          <div className='hidden lg:block bg-[#ffffff] h-[1px] mx-[6%] mt-12 hidden lg:block'></div>
        </div>
        {allBlogs?.map((post) => {
          return <SinglePostIntro key={post.id} post={post} />
        })}
      </div>
    </>
  )
}

export default Blog
