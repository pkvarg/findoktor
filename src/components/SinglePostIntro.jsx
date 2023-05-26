import React from 'react'
import { useNavigate } from 'react-router-dom'

const SinglePostIntro = ({ post }) => {
  const navigate = useNavigate()

  return (
    <>
      // post img
      <h1>{post.title}</h1>
      <p>{post.intro}</p>
      <button onClick={() => navigate(`/blog/${post.id}`)}>
        Čítaj celý článok
      </button>
    </>
  )
}

export default SinglePostIntro
