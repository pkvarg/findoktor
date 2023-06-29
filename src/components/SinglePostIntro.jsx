import React from 'react'
import { useNavigate } from 'react-router-dom'

const SinglePostIntro = ({ post }) => {
  const navigate = useNavigate()
  const goToCurrentPost = (postId) => {
    navigate(`/blog/${postId}`)
  }

  return (
    <>
      <div className='text-[#ffffff] flex flex-col lg:flex-row mx-[8%] mt-[65px] gap-10 relative'>
        <img
          className='mt-[50px] lg:mt-0 lg:w-[17%] lg:absolute'
          src={post.url}
          alt='blog01'
        />
        <div className='flex flex-col gap-4 my-4 lg:ml-[20%] lg:w-[90%]'>
          <h1 className='text-[27.5px]'>{post.title}</h1>
          <p className='text-[22.5px] text-justify'>{post.intro}</p>
        </div>
        <button
          className='bg-[#0179d6] text-[22px] py-4 lg:w-[25%] lg:h-[10%] lg:mt-[130px] mb-[15px] rounded-[30px] hover:border hover-border-white hover:border-[2px]'
          onClick={() => goToCurrentPost(post.id)}
        >
          Čítaj celý článok
        </button>
      </div>
      <div className='bg-[#ffffff] h-[1px] mx-[6%] mt-[40px]'></div>
    </>
  )
}

export default SinglePostIntro
