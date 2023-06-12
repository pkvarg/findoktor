import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth, xauth } from './../../firebaseConfig'
import { storage } from './../../firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { toast } from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'

const CreateBlog = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [intro, setIntro] = useState('')
  const [text, setText] = useState('')
  const { isAuth } = useStateContext()
  const [image, setImage] = useState(null)
  const [urlLink, setUrlLink] = useState('')

  const postsCollectionRef = collection(db, 'posts')

  console.log('creBl', isAuth)

  const createPost = () => {
    // image to firebase storage
    const imageRef = ref(storage, image.name)
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            addDoc(postsCollectionRef, {
              title,
              intro,
              text,
              url,
              image: image.name,
              author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid,
              },
            })
          })
          .catch((error) => {
            toast.error(error.message, 'error getting image url')
          })
        //setImage(null)
        //localStorage.removeItem('postList')
        toast.success('Post created.')
        navigate('/')
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  return isAuth === xauth ? (
    <div className='bg-[#013bb0] text-white pb-[8%] w-[100vw]'>
      <h1
        className='text-[25px] cursor-pointer p-4'
        onClick={() => navigate('/')}
      >
        Home.
      </h1>
      <div className='text-white mt-8 lg:mt-[2%]'>
        <h1 className='text-center text-[35px]'>Create New Blog Post</h1>

        <div className='flex flex-col mt-8 lg:mt-4 gap-8 lg:gap-4 text-[25px] mx-[5%] lg:mx-[30%]'>
          <div>
            <label className='hidden lg:block'>Image : </label>
            <input type='file' onChange={handleImageChange} />
          </div>

          {/* <div>
            <img src={urlLink} />
          </div> */}

          <div className='flex justify-between mt-8 lg:mt-0'>
            <label className='hidden lg:block'>Title : </label>
            <textarea
              className='text-black w-[95%] lg:w-[85%]'
              placeholder='Title...'
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
          </div>

          <div className='flex justify-between'>
            <label className='hidden lg:block'>Intro : </label>
            <textarea
              className='text-black h-[150px] w-[95%] lg:w-[85%]'
              placeholder='Intro...'
              onChange={(e) => {
                setIntro(e.target.value)
              }}
            />
          </div>

          <div className='flex justify-between h-[250px]'>
            <label className='hidden lg:block'>Post : </label>
            <textarea
              className='text-black w-[95%] lg:w-[85%]'
              placeholder='Post...'
              onChange={(e) => {
                setText(e.target.value)
              }}
            />
          </div>
          <button
            className='bg-[#007ad7] p-4 mt-6 lg:mt-2 lg:w-[85%] lg:ml-auto rounded-[30px] hover:border'
            onClick={createPost}
          >
            {' '}
            Submit Post
          </button>
        </div>
      </div>
    </div>
  ) : (
    <h1 className='text-[#ffffff] text-[50px] text-center bg-[#e42938] mt-[25%]'>
      Unauthorised Access
    </h1>
  )
}

export default CreateBlog
