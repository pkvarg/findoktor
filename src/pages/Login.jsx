import React, { useState, useEffect } from 'react'
import { auth, provider, xauth, db } from './../../firebaseConfig'
import { signInWithPopup } from 'firebase/auth'
import { signOut } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import {
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'

const Login = () => {
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState()
  const [agreed, setAgreed] = useState(0)
  const [declined, setDeclined] = useState(0)
  const [botsCount, setBotsCount] = useState(0)
  const visitorsCollectionRef = collection(db, 'visitors')
  const botsCollectionRef = collection(db, 'bots')

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      if (
        result.user.email === import.meta.env.VITE_AUTH_EMAIL_2 ||
        import.meta.env.VITE_AUTH_EMAIL_1
      ) {
        localStorage.setItem(xauth, true)
        setIsAuth(true)
        toast.success('Logged in.')
      } else {
        navigate('/')
        toast.error('Unauthorised user.')
      }
    })
  }

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      toast.success('Logged out.')
      //navigate('/')
    })
  }

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

  return (
    <>
      <div className='bg-[#013bb0] text-white h-[100vh]'>
        <div className='flex gap-4 items-start p-8'>
          <h1
            className='text-[25px] cursor-pointer hover:border px-2 rounded-xl'
            onClick={() => navigate('/')}
          >
            Home.
          </h1>
          {isAuth && (
            <>
              <h1
                className='text-[25px] cursor-pointer hover:border px-2 rounded-xl'
                onClick={() => navigate('/create-blog')}
              >
                Create New Blog.
              </h1>

              <h1
                onClick={() => getStats()}
                className='text-[25px] cursor-pointer hover:border px-2 rounded-xl'
              >
                Get stats.
              </h1>
              <h1
                className='text-[25px] cursor-pointer bg-[#e42938] px-2 rounded-xl hover:border'
                onClick={() => signUserOut()}
              >
                Log out.
              </h1>
            </>
          )}

          {/* <div className='ml-2 text-[25px]'>
            <p>Agreed: {agreed}</p>
            <p>Declined: {declined}</p>
            <p>Visitors total: {Number(agreed) + Number(declined)} </p>
            <p>Bots: {botsCount}</p>
          </div>  */}
        </div>
        <button
          onClick={signInWithGoogle}
          className='bg-[#158765] m-8 p-2 rounded-xl text-[25px] hover:border'
        >
          Log in with Google
        </button>
      </div>
    </>
  )
}

export default Login
