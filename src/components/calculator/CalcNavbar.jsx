import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const CalcNavbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const reloadAndHome = () => {
    if (location.pathname === '/') window.location.reload()
    else navigate('/')
  }

  const path = location.pathname
  return (
    <div
      className={
        path === '/'
          ? 'flex flex-row justify-center items-center mt-2 gap-[65%] md:gap-[52.5%] lg:gap-[45%]'
          : 'flex flex-row justify-between items-center mt-2 mx-[5.75%]'
      }
    >
      <div className='flex flex-row items-center gap-2 lg:gap-2'>
        {/* <div className='flex flex-col gap-[4px] lg:gap-[4px]'>
          <div className='h-[5px] lg:h-[5px] bg-[#0076ba]  w-[30px] lg:w-[25px]'></div>
          <div className='h-[5px] lg:h-[5px] bg-[#0076ba] w-[30px] lg:w-[25px]'></div>
          <div className='h-[5px] lg:h-[5px] bg-[#0076ba] w-[30px] lg:w-[25px]'></div>
        </div> */}

        <p
          onClick={() => reloadAndHome()}
          className='text-[15px] lg:text-[15px] leading-[14px] lg:leading-[14px] font-extrabold -mt-[2%] hover:cursor-pointer'
        >
          MICHAL <br /> DOVALA
        </p>
      </div>
      <div className='flex flex-col cursor-pointer relative'>
        <div
          onClick={() => setShowMenu((prev) => !prev)}
          className='flex flex-col gap-[4px] lg:gap-[4px]'
        >
          <div className='h-[5px] lg:h-[5px] bg-[#0076ba]  w-[30px] lg:w-[25px]'></div>
          <div className='h-[5px] lg:h-[5px] bg-[#0076ba] w-[30px] lg:w-[25px]'></div>
          <div className='h-[5px] lg:h-[5px] bg-[#0076ba] w-[30px] lg:w-[25px]'></div>
        </div>

        {showMenu && (
          <div className='absolute top-8 -right-2 w-[90vw] lg:w-[600px] z-20 bg-white'>
            <div className='flex flex-col items-end text-[#007ad6] font-semibold text-[22.5px] pr-[5px] menu'>
              <a href='/about'>O nás</a>
              <a href='/'>Aktuálna ponuka</a>
              <a href='/'>Nacenenie</a>
              <a href='/'>Financie</a>
              <a href='/'>Rekonštrukcia</a>
              <a href='/'>Naše služby</a>
              <a href='/'>Práce na mieru</a>
              <a href='/contact'>Kontakt</a>
            </div>
          </div>
        )}

        {/* <img
          className='w-[30%] lg:w-[30%] ml-[30%]'
          src='/maklerLogo.webp'
          alt='logo'
        />
        <p className='text-[12.5px] lg:text-[12.5px] leading-[12.5px] lg:leading-[12.5px] font-black mt-1 lg:mt-1'>
          MODERNÝ <br />{' '}
        </p>
        <p className='text-[12.5px] lg:text-[12.50px] ml-[15%] lg:ml-[20%] -mt-0.5 lg:-mt-0.5'>
          MAKLÉR
        </p> */}
      </div>
    </div>
  )
}

export default CalcNavbar
