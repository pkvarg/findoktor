import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Hero, About, Services, Blog } from './../sections'

const Home = () => {
  useEffect(() => {
    const { hash } = window.location
    if (hash) {
      const targetElement = document.querySelector(hash)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Blog />
    </>
  )
}

export default Home
