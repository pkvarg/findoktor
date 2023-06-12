import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SinglePost, PageNavbar, PageNavbarMob } from '../components'
import { useNavigate } from 'react-router-dom'
import SinglePostIntro from '../components/SinglePostIntro'
import { useStateContext } from '../context/StateContext'

const BlogPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id
  const { allBlogs } = useStateContext()

  const [currentPost, setCurrentPost] = useState([])

  useEffect(() => {
    if (id) {
      const postById = allBlogs?.find((post) => post.id === id)
      setCurrentPost(postById)
    }
  }, [id])

  return (
    <>
      <PageNavbar />
      <PageNavbarMob />
      <div className='lg:mt-0 pt-4 lg:pt-8 lg:pb-[5%]'>
        <h1
          className='uppercase text-[#007ad6] text-[30px] text-center cursor-pointer'
          onClick={() => navigate('/blog')}
        >
          {!params.id ? 'Blog' : 'Blog - všetky články'}
        </h1>
        <div className='hidden lg:block bg-[#ffffff] h-[2px] mx-[6%] mt-8 hidden lg:block'></div>
      </div>

      {!id ? (
        allBlogs?.map((post) => {
          return <SinglePostIntro key={post.id} post={post} />
        })
      ) : (
        <SinglePost post={currentPost} />
      )}
    </>
  )
}

export default BlogPage
