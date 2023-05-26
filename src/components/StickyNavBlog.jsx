import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

const StickyNavBlog = () => {
  const [isSticky, setIsSticky] = useState(true)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.pageYOffset > 0) {
  //       setIsSticky(true)
  //     } else {
  //       setIsSticky(false)
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <div className='hidden lg:block'>
      {isSticky && (
        <div className='bg-[#ffffff]'>
          <div className='relative flex items-center justify-between mx-[2%]'>
            <div>
              <div className='flex items-center  gap-2 mt-2 cursor-pointer'>
                <img
                  className='w-[15%]'
                  src='/fd-red-logo.webp'
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
                  src='/fn-sf-logo.svg'
                  alt='sophistic-pro-finance'
                />
              </div>
            </div>
            <div className='flex text-[#0179d6]'>
              <Link
                to='home'
                spy={true}
                smooth={true}
                offset={-250}
                duration={500}
                className='text-[30px] sm:text-[30px] lg:text-[24px] font-[350] hover:bg-[#007ad6] hover:rounded-[30px] hover:text-[#ffffff]  p-3 block rounded-md text-base font-medium'
              >
                DOMOV
              </Link>

              <Link
                to='about'
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
                className='text-[30px] sm:text-[30px] lg:text-[24px]  font-[350] hover:bg-[#007ad6] hover:rounded-[30px] hover:text-[#ffffff] p-3 block rounded-md text-base font-medium'
              >
                O NÁS
              </Link>

              <Link
                to='services'
                spy={true}
                smooth={true}
                offset={5}
                duration={500}
                className='text-[30px] sm:text-[30px] lg:text-[24px]  font-[350] hover:bg-[#007ad6] hover:rounded-[30px] hover:text-[#ffffff] p-3 block  rounded-md text-base font-medium'
              >
                SLUŽBY
              </Link>
              <Link
                to='blog'
                spy={true}
                smooth={true}
                offset={5}
                duration={500}
                className='text-[30px] sm:text-[30px] lg:text-[24px] font-[350] bg-[#007ad6] rounded-[30px] text-[#ffffff] block p-3 text-base font-medium'
              >
                BLOG
              </Link>
              <Link
                to='blog'
                spy={true}
                smooth={true}
                offset={5}
                duration={500}
                className='text-[30px] sm:text-[30px] lg:text-[24px]  font-[350] hover:bg-[#007ad6] hover:rounded-[30px] hover:text-[#ffffff] p-3 block  rounded-md text-base font-medium'
              >
                KONTAKT
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StickyNavBlog
