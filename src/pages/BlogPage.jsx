import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection } from 'firebase/firestore'
import { db, xauth } from './../../firebaseConfig'
import { SinglePost, PageNavbar, PageNavbarMob } from '../components'
import { useNavigate } from 'react-router-dom'

const BlogPage = () => {
  const navigate = useNavigate()
  const params = useParams()

  const [postList, setPostList] = useState([])
  const [storedPosts, setStoredPosts] = useState([])
  const [isAuth, setIsAuth] = useState()
  const [currentPost, setCurrentPost] = useState([])
  const postsCollectionRef = collection(db, 'posts')

  useEffect(() => {
    const loggedIn = localStorage.getItem(xauth)
    if (loggedIn) {
      setIsAuth(loggedIn)
    } else if (!loggedIn) {
      setIsAuth(false)
    } else {
      setIsAuth(false)
    }
    const storagePosts = localStorage.getItem('postList')
      ? JSON.parse(localStorage.getItem('postList'))
      : []
    setStoredPosts(storagePosts)
    const postById = storagePosts.find((post) => post.id === params.id)
    setCurrentPost(postById)
  }, [])

  return (
    <>
      <PageNavbar />
      <PageNavbarMob />
      <div className='bg-[#013baf] lg:mt-0 pt-4 lg:pt-8 lg:pb-[5%]'>
        <h1
          className='uppercase text-[#007ad6] text-[30px] text-center cursor-pointer'
          onClick={() => navigate('/blog')}
        >
          {!params.id ? 'Blog' : 'Blog - všetky články'}
        </h1>
        <div className='hidden lg:block bg-[#ffffff] h-[2px] mx-[6%] mt-8 hidden lg:block'></div>
      </div>

      {!params.id ? (
        storedPosts.map((post) => {
          return <SinglePost key={post.id} post={post} isAuth={isAuth} />
        })
      ) : (
        <SinglePost post={currentPost} isAuth={isAuth} />
      )}
    </>
  )
}

export default BlogPage