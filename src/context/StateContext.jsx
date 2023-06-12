import React, { createContext, useContext, useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db, xauth } from '../../firebaseConfig'
import { toast } from 'react-hot-toast'

const Context = createContext()

export const StateContext = ({ children }) => {
  const [allBlogs, setAllBlogs] = useState()
  const [isAuth, setIsAuth] = useState('non')
  const postsCollectionRef = collection(db, 'posts')

  useEffect(() => {
    const storeAuth = window.localStorage.getItem('blogging')
    if (storeAuth !== null) setIsAuth(JSON.parse(storeAuth))
  }, [])

  useEffect(() => {
    localStorage.setItem('blogging', JSON.stringify(isAuth))

    const getPosts = async () => {
      try {
        const data = await getDocs(postsCollectionRef)
        setAllBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        //localStorage.setItem('storedBlogs', JSON.stringify(allBlogs))
      } catch (error) {
        toast.error(error)
      }
    }
    getPosts()
  }, [isAuth])

  return (
    <Context.Provider value={{ allBlogs, setAllBlogs, isAuth, setIsAuth }}>
      {children}
    </Context.Provider>
  )
}
export const useStateContext = () => useContext(Context)
