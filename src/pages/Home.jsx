import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Hero, About, Services, Blog, Contact } from './../sections'

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
    <div className=''>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Blog />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  )
}

export default Home
