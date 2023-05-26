import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection } from 'firebase/firestore'
import { db, xauth } from './../../firebaseConfig'

import { SinglePost, PageNavbar } from '../components'

const BlogPage = () => {
  const [postList, setPostList] = useState([])
  const [storedPosts, setStoredPosts] = useState([])
  const [isAuth, setIsAuth] = useState()
  const [currentPost, setCurrentPost] = useState([])
  const postsCollectionRef = collection(db, 'posts')
  const params = useParams()
  const id = params.id

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
    const postById = storagePosts.find((post) => post.id === id)
    setCurrentPost(postById)
  }, [id])

  return (
    <>
      <PageNavbar />
      <div className='bg-[#013baf] mt-[-5%] lg:mt-0 py-[5%]'>
        <h1 className=' uppercase text-[#007ad6] text-[30px] text-center'>
          Blog
        </h1>
        <div className='bg-[#ffffff] h-[2px] mx-[6%] mt-12'></div>
      </div>

      {!id ? (
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
