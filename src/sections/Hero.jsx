import React from 'react'
import { Navbar } from '../components'

const Hero = () => {
  return (
    <div className='flex flex-row'>
      <div className='hero-bg-left w-[33%] h-[100vh] relative'>
        <img
          className='absolute bottom-0 w-full aspect-w-6 aspect-h-9'
          src='/src/assets/Michal.png'
          alt='Michal-Dovala-Financny-doktor'
        />
      </div>
      <div className='hero-bg-right w-[67%] h-[100vh]'>
        <Navbar />
      </div>
    </div>
  )
}

export default Hero
