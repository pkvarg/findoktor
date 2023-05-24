import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const StickyNav = () => {
  const [isSticky, setIsSticky] = useState(false)
  console.log(window.pageYOffset)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='hidden lg:block'>
      {isSticky && (
        <div className='bg-[#ffffff]'>
          <div className='relative flex items-center justify-between mx-[2%]'>
            <div>
              <div
                className='flex items-center  gap-2 mt-2 cursor-pointer'
                onClick={() => home()}
              >
                <img
                  className='w-[15%]'
                  src='/src/assets/fd-red-logo.webp'
                  alt='red-logo'
                />
                <h1 className='text-[#385ebc] text-[35px] font-light uppercase'>
                  Finančný
                </h1>
                <h1 className='text-[#be324b] text-[35px] font-light uppercase'>
                  Doktor
                </h1>
              </div>
              <div className='flex items-center ml-[5%] -mt-[10px] gap-4 pb-4'>
                <p className='text-[#385ebc] text-[25px]'>člen skupiny:</p>
                <img
                  className='w-[50%]'
                  src='/src/assets/fn-sf-logo.svg'
                  alt='sophistic-pro-finance'
                />
              </div>
            </div>
            <div className='flex text-[#0179d6]'>
              <a
                href='#'
                className='text-[30px] sm:text-[30px] lg:text-[24px] font-[350] hover:bg-[#007ad6] hover:rounded-[30px] hover:text-[#ffffff]  p-3 block rounded-md text-base font-medium'
              >
                DOMOV
              </a>
              <a
                href='#'
                className='text-[30px] sm:text-[30px] lg:text-[24px] font-[350] hover:bg-[#007ad6] hover:rounded-[30px] hover:text-[#ffffff] block p-3 rounded-md text-base font-medium'
              >
                O NÁS
              </a>
              <a
                href='#'
                className='text-[30px] sm:text-[30px] lg:text-[24px]  font-[350] hover:bg-[#007ad6] hover:rounded-[30px] hover:text-[#ffffff] p-3 block rounded-md text-base font-medium'
              >
                SLUŽBY
              </a>
              <a
                href='#'
                className='text-[30px] sm:text-[30px] lg:text-[24px]  font-[350] hover:bg-[#007ad6] hover:rounded-[30px] hover:text-[#ffffff] p-3 block  rounded-md text-base font-medium'
              >
                BLOG
              </a>
              <a
                href='#'
                className='text-[30px] sm:text-[30px] lg:text-[24px]  font-[350] hover:bg-[#007ad6] hover:rounded-[30px] hover:text-[#ffffff] p-3 block  rounded-md text-base font-medium'
              >
                KONTAKT
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StickyNav
