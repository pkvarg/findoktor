import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteDoc, doc } from 'firebase/firestore'
import { db, xauth } from './../../firebaseConfig'
import { toast } from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'
// import LikeButton from './../components/LikeButton'

const SinglePost = ({ post }) => {
  const navigate = useNavigate()
  const { isAuth } = useStateContext()
  const deletePost = useCallback(async (id) => {
    alert('Delete post - Are you sure?')
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc)

    toast.success('Post deleted')
    navigate('/')
  }, [])

  const editPost = (postId) => {
    navigate(`/edit-blog/${postId}`)
  }

  return (
    <div className='text-white relative' key={post.id}>
      <div className='pb-10 lg:mx-[10%]'>
        <div className='flex flex-col lg:flex-row items-center'>
          <img
            src={post.url}
            className='w-[90%] lg:w-[15%] lg:absolute lg:right-[10%] mt-4 lg:mt-0'
          />
          <div className='w-[85%] lg:w-[80%]'>
            <h1 className='text-[25px] lg:text-[40px] mt-4 lg:mt-0'>
              {post.title}
            </h1>
            <p className='text-[22.5px] text-justify mt-4 lg:mt-0'>
              {post.intro}
            </p>
          </div>
        </div>
        <p className='text-[25px] text-justify mt-[6%] mb-8 whitespace-pre-wrap w-[85%] lg:w-[100%] ml-auto mr-auto lg:ml-0 lg:mr-0'>
          {post.text}
        </p>
        <div className='flex justify-center'>
          <button className='text-[25px] font-normal bg-[#007ad7] rounded-[55px] p-4 mt-4 hover:border hover-border-white hover:border-[2px]'>
            Bezplatné stretnutie
          </button>
        </div>

        {/* <LikeButton id={post.id} /> */}
        {/* <div className='hidden lg:block bg-[#ffffff] h-[2px] mx-[2%] lg:mx-[-6%] my-[20%] lg:my-[4%]'></div> */}
      </div>

      <>
        {isAuth === xauth && (
          <>
            <button
              className='absolute top-6 lg:top-3 right-[7%] bg-[#013baf]'
              onClick={() => navigate('/create-blog')}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-plus-square'
                viewBox='0 0 16 16'
              >
                <path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
                <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
              </svg>
            </button>
            <button
              className='absolute top-[67.5px] lg:top-12 right-[7%] bg-[#013baf]'
              onClick={() => editPost(post.id)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-pencil-square'
                viewBox='0 0 16 16'
              >
                <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
                <path
                  fillRule='evenodd'
                  d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'
                />
              </svg>
            </button>
            <button
              className='absolute top-[110px] lg:top-20 right-[7%] bg-[#013baf]'
              onClick={() => deletePost(post.id)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-trash3'
                viewBox='0 0 16 16'
              >
                <path d='M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z' />
              </svg>
            </button>
          </>
        )}
      </>
    </div>
  )
}

export default SinglePost
