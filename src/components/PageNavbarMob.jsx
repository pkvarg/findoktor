import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const PageNavbarMob = () => {
  const [navbar, setNavbar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  function toggleDropdown() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className='block lg:hidden'>
        <div className='mx-auto px-2  bg-[#ffffff] relative'>
          <div className='flex h-16 justify-end'>
            <div
              className='flex mt-[-5%] lg:hidden items-center ml-[10%] gap-2 mt-2 z-1 absolute top-6 -left-8'
              onClick={() => navigate('/')}
            >
              <h1 className='text-[#385ebc] text-[35px] font-light uppercase'>
                Finančný
              </h1>
              <h1 className='text-[#be324b] text-[35px] font-light uppercase'>
                Doktor
              </h1>
            </div>

            <div className='flex flex-row justify-center items-center text-white z-50'>
              {isOpen && (
                <div className='bg-[#013bb0] translate-y-[65.995%] flex flex-col  translate-x-[15%] justify-center items-end w-[100vw]'>
                  <Link
                    to='/'
                    className='!text-[26px] font-[350] hover:bg-[#007ad6] hover:rounded-[30px] p-2 lg:py-3 px-3 block rounded-md text-base font-medium'
                  >
                    DOMOV
                  </Link>
                  <Link
                    to='/#about'
                    className='!text-[26px] font-[350] hover:bg-[#007ad6] hover:rounded-[30px] block  py-2 lg:py-3 p-3 rounded-md text-base font-medium'
                  >
                    O NÁS
                  </Link>
                  <Link
                    to='/#services'
                    className='!text-[26px] font-[350] hover:bg-[#007ad6] hover:rounded-[30px]  py-2 lg:py-3 p-3 block rounded-md text-base font-medium'
                  >
                    SLUŽBY
                  </Link>
                  <Link
                    to='/#blog'
                    className='!text-[26px] font-[350] hover:bg-[#007ad6] hover:rounded-[30px] py-2 lg:py-3 p-3 block  rounded-md text-base font-medium'
                  >
                    BLOG
                  </Link>
                  <Link
                    to='/#contact'
                    className='!text-[26px] font-[350] hover:bg-[#007ad6] hover:rounded-[30px] py-2 lg:py-3 p-3 block  rounded-md text-base font-medium'
                  >
                    KONTAKT
                  </Link>
                </div>
              )}

              <button
                onClick={toggleDropdown}
                type='button'
                className='p-2 rounded-md focus:outline-none'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-8 w-8 text-[#013baf] lg:text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className='block h-8 w-8 text-[#013baf] lg:text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default PageNavbarMob
