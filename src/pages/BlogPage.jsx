import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection } from 'firebase/firestore'
import { db, xauth } from './../../firebaseConfig'
import { SinglePost, PageNavbar, PageNavbarMob } from '../components'
import { useNavigate } from 'react-router-dom'
import SinglePostIntro from '../components/SinglePostIntro'
import { toast } from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'

const BlogPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id
  const { allBlogs } = useStateContext()

  const [isAuth, setIsAuth] = useState()
  const [currentPost, setCurrentPost] = useState([])

  useEffect(() => {
    const loggedIn = localStorage.getItem(xauth)
    if (loggedIn) {
      setIsAuth(loggedIn)
    } else if (!loggedIn) {
      setIsAuth(false)
    } else {
      setIsAuth(false)
    }
  }, [])

  useEffect(() => {
    if (id) {
      const postById = allBlogs?.find((post) => post.id === id)
      setCurrentPost(postById)
    }
  }, [id])

  console.log('allBlogs', allBlogs)
  console.log('current', currentPost)

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
          return <SinglePostIntro key={post.id} post={post} isAuth={isAuth} />
        })
      ) : (
        <SinglePost post={currentPost} isAuth={isAuth} />
      )}
    </>
  )
}

export default BlogPage
