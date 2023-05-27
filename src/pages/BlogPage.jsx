import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection } from 'firebase/firestore'
import { db, xauth } from './../../firebaseConfig'
import { SinglePost, PageNavbar } from '../components'
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
      <div className='bg-[#013baf] mt-[-5%] lg:mt-0 py-[5%]'>
        <h1
          className='uppercase text-[#007ad6] text-[30px] text-center cursor-pointer'
          onClick={() => navigate('/blog')}
        >
          {!params.id ? 'Blog' : 'Blog - všetky články'}
        </h1>
        <div className='bg-[#ffffff] h-[2px] mx-[6%] mt-8'></div>

        {/* {isAuth && (
          <h1
            className='text-[22.5px] text-[#ffffff] w-[190px] mt-4 ml-auto mr-[6.5%] cursor-pointer border px-2 rounded-xl hover:text-[#007ad7] hover:bg-[#ffffff]'
            onClick={() => navigate('/create-blog')}
          >
            Create New Blog
          </h1>
        )} */}
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
