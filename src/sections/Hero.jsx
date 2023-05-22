import React from 'react'
import { Navbar } from '../components'

const Hero = () => {
  return (
    <div className='flex flex-row'>
      <div className='hero-bg-left w-[33%] h-[100vh] relative'>
        <div className='flex ml-[10%] gap-2 mt-2'>
          <img src='/src/assets/fd-red-logo.webp' alt='red-logo' />
          <h1 className='text-[#385ebc] text-[45px] font-light uppercase'>
            Finančný
          </h1>
          <h1 className='text-[#be324b] text-[45px] font-light uppercase'>
            Doktor
          </h1>
        </div>
        <div className='flex items-center ml-[12.5%] gap-4'>
          <p className='text-[#385ebc] text-[25px]'>člen skupiny:</p>
          <img
            className='w-[40%]'
            src='/src/assets/fn-sf-logo.svg'
            alt='sophistic-pro-finance'
          />
        </div>
        <img
          className='absolute bottom-0 w-[85%] aspect-w-6 aspect-h-9 z-1'
          src='/src/assets/Michal.png'
          alt='Michal-Dovala-Financny-doktor'
        />
      </div>
      <div className='hero-bg-right w-[67%] h-[100vh] relative'>
        <Navbar />
        <div className='absolute right-[7.5%] top-[17.5%]'>
          <img
            className='w-[85%]'
            src='/src/assets/hero-squares.webp'
            alt='fd-squares'
          />
        </div>
        <div className='mt-[35%] text-[#007ad6] mx-[12.5%]'>
          <h2 className='text-[28.5px]'>Vitajte, ste v dobrých rukách.</h2>
          <div className='text-[#ffffff] text-[42px] font-light text-justify leading-[42.50px] tracking-wide mt-[2%]'>
            <h1>
              Spravte prvý krok k zlepšeniu Vášho finančného zdravia a dohodnite
              si stretnutie s Vašim osobným finančným doktorom.
            </h1>
            <button className='text-[25px] font-normal absolute right-[11.5%] bg-[#007ad7] rounded-[55px] px-12 py-4 mt-4 hover:border hover-border-white hover:border-[2px]'>
              Bezplatné stretnutie
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
