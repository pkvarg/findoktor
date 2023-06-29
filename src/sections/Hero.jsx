import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components'
import { motion } from 'framer-motion'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='flex flex-row one' id='home'>
        <div className='hero-bg-left hidden lg:block h-[100vh] relative'>
          <div
            className='flex items-center gap-2 mt-2 cursor-pointer'
            onClick={() => home()}
          >
            <img className='w-[15%]' src='fd-red-logo.webp' alt='red-logo' />
            <h1 className='text-[#385ebc] text-[1.75em] font-light uppercase'>
              Finančný
            </h1>
            <h1 className='text-[#be324b] text-[1.75em] font-light uppercase'>
              Doktor
            </h1>
          </div>
          <div className='flex items-center ml-[12.5%] gap-4'>
            <p className='text-[#385ebc] text-[25px]'>člen skupiny:</p>
            <img
              className='w-[50%]'
              src='fn-sf-logo.svg'
              alt='sophistic-pro-finance'
            />
          </div>
          <img
            className='absolute bottom-0 h-auto w-[90%] aspect-w-6 aspect-h-9 z-1'
            src='Michal.png'
            alt='Michal-Dovala-Financny-doktor'
          />
        </div>
        <div className='hero-bg-right relative'>
          <Navbar />

          <div className='absolute right-[7.5%] top-[10.5%]'>
            <img
              className='w-0 lg:w-[75%]'
              src='hero-squares.webp'
              alt='fd-squares'
            />
          </div>
          <div className='mt-[70%] lg:mt-[30%] text-[#007ad6] mx-[12.5%]'>
            <h2 className='text-[28.5px] text-center lg:text-left leading-[35px]'>
              Vitajte, ste v dobrých rukách.
            </h2>
            <div className='block lg:hidden flex justify-center my-8'>
              <img
                className='w-[15%] rounded-xl'
                src='fd-red-logo.webp'
                alt='red-logo'
              />
            </div>
            <div className='text-[#ffffff] text-[34px] lg:text-[42px] font-normal leading-[42.50px] tracking-wide mt-[2%] pb-8 lg:pb-0'>
              <h1 className='text-center lg:text-left'>
                Urobte prvý krok k zlepšeniu Vášho finančného zdravia.
              </h1>
              <span className='hidden lg:block '>
                Dohodnite si stretnutie s Vašim osobným finančným doktorom.
              </span>
            </div>
          </div>
          <div className='flex justify-center'>
            <button
              onClick={() => navigate('/meeting')}
              className='text-[25px] text-[#ffffff] font-normal bg-[#007ad7] rounded-[55px] px-12 mb-16 py-4 lg:py-4  mt-4 lg:mt-6 hover:border hover-border-white hover:border-[2px] lg:ml-[42%] '
            >
              Bezplatné stretnutie
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
