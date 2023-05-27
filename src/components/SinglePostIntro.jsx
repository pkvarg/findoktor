import React from 'react'
import { useNavigate } from 'react-router-dom'

const SinglePostIntro = ({ post }) => {
  const navigate = useNavigate()
  const goToCurrentPost = (postId) => {
    navigate(`/blog/${postId}`)
  }

  return (
    <>
      <div className='text-[#ffffff] flex mx-[10%] gap-8'>
        <img className='w-[15%]' src={post.url} alt='blog01' />
        <div className='flex flex-col gap-4 my-4'>
          <h1 className='text-[27.5px]'>{post.title}</h1>
          <p className='text-[22.5px] text-justify'>{post.intro}</p>
        </div>
        <button
          className='bg-[#0179d6] text-[22px] w-[45%] mt-[130px] mb-[15px] rounded-[30px] hover:border hover-border-white hover:border-[2px]'
          onClick={() => goToCurrentPost(post.id)}
        >
          Čítaj celý článok
        </button>
      </div>
      <div className='bg-[#ffffff] h-[1px] mx-[6%] mt-4 mb-8'></div>
    </>
  )
}

export default SinglePostIntro
