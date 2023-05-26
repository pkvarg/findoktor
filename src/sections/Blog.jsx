import React, { useState } from 'react'
import { StickyNavBlog } from '../components'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

const Blog = () => {
  const [postList, setPostList] = useState([])
  const postsCollectionRef = collection(db, 'posts')

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
