import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [isAuth, setIsAuth] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  function toggleDropdown() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className='mt-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 justify-end'>
            {!isOpen && (
              <div className='flex mt-[-1.5%] lg:hidden items-center ml-[10%] gap-2 mt-2'>
                <h1 className='text-[#385ebc] text-[35px] font-light uppercase'>
                  Finančný
                </h1>
                <h1 className='text-[#be324b] text-[35px] font-light uppercase'>
                  Doktor
                </h1>
              </div>
            )}
            <div className='flex flex-row justify-center items-center text-white'>
              {isOpen && (
                <div
                  className='bg-[#013bb0] translate-y-[60%] md:translate-y-[75%] lg:translate-y-0 flex flex-col lg:flex-row
                translate-x-[30%] md:translate-x-[50%] lg:translate-x-0 justify-center items-end'
                >
                  <a
                    href='#'
                    className='text-[30px] sm:text-[30px] lg:text-[28px] font-[350] hover:bg-[#007ad6] hover:rounded-[30px] p-3 block rounded-md text-base font-medium'
                  >
                    DOMOV
                  </a>
                  <Link
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={5}
                    duration={500}
                    className='text-[30px] sm:text-[30px] lg:text-[28px] font-[350] hover:bg-[#007ad6] hover:rounded-[30px] block p-3 rounded-md text-base font-medium'
                  >
                    O NÁS
                  </Link>
                  <a
                    href='#'
                    className='text-[30px] sm:text-[30px] lg:text-[28px]  font-[350] hover:bg-[#007ad6] hover:rounded-[30px] p-3 block rounded-md text-base font-medium'
                  >
                    SLUŽBY
                  </a>
                  <a
                    href='#'
                    className='text-[30px] sm:text-[30px] lg:text-[28px]  font-[350] hover:bg-[#007ad6] hover:rounded-[30px] p-3 block  rounded-md text-base font-medium'
                  >
                    BLOG
                  </a>
                  <a
                    href='#'
                    className='text-[30px] sm:text-[30px] lg:text-[30px]  font-[350] hover:bg-[#007ad6] hover:rounded-[30px] p-3 block  rounded-md text-base font-medium'
                  >
                    KONTAKT
                  </a>
                </div>
              )}

              <button
                onClick={toggleDropdown}
                type='button'
                className='p-2 rounded-md text-white-400 focus:outline-none '
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-8 w-8 text-white'
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
                    className='block h-8 w-8 text-white'
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

export default Navbar
