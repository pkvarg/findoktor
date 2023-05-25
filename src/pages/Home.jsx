import React from 'react'
import { Link } from 'react-router-dom'
import { Hero, About, Services, Blog } from './../sections'

const Home = () => {
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
