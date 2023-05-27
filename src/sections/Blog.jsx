import React, { useState, useEffect } from 'react'
import { StickyNavBlog } from '../components'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import {
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import SinglePostIntro from '../components/SinglePostIntro'

const Blog = () => {
  const navigate = useNavigate()
  const [postList, setPostList] = useState([])
  const postsCollectionRef = collection(db, 'posts')

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(postsCollectionRef)
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        localStorage.setItem(
          'postList',
          JSON.stringify(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          )
        )
      } catch (error) {
        toast.error(error)
      }
    }
    getPosts()
  }, [])

  return (
    <>
      <StickyNavBlog />
      <div className='bg-[#013bb0] relative pb-8' id='blog'>
        <div className='mt-[-5%] lg:mt-0 py-[5%]'>
          <h1
            className='uppercase text-[#007ad6] text-[30px] text-center cursor-pointer'
            onClick={() => navigate('/blog')}
          >
            Blog
          </h1>
        </div>
        {postList.map((post) => {
          return <SinglePostIntro key={post.id} post={post} />
        })}
      </div>
    </>
  )
}

export default Blog
