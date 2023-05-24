import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
            <div className='flex flex-row justify-center items-center text-white'>
              {isOpen && (
                <div
                  className='translate-y-[75%] md:translate-y-[75%] lg:translate-y-0 flex flex-col lg:flex-row
                translate-x-[55%] md:translate-x-[50%] lg:translate-x-0 justify-center items-end'
                >
                  <a
                    href='#'
                    className='text-[26px] font-[350] hover:bg-[#007ad6] hover:rounded-[30px] p-3 block rounded-md text-base font-medium'
                  >
                    DOMOV
                  </a>
                  <a
                    href='#'
                    className='text-[26px] font-[350] hover:bg-[#007ad6] hover:rounded-[30px] block p-3 rounded-md text-base font-medium'
                  >
                    O NÁS
                  </a>
                  <a
                    href='#'
                    className='text-[26px] font-[350] hover:bg-[#007ad6] hover:rounded-[30px] p-3 block rounded-md text-base font-medium'
                  >
                    SLUŽBY
                  </a>
                  <a
                    href='#'
                    className='text-[26px] font-[350] hover:bg-[#007ad6] hover:rounded-[30px] p-3 block  rounded-md text-base font-medium'
                  >
                    BLOG
                  </a>
                  <a
                    href='#'
                    className='text-[26px] font-[350] hover:bg-[#007ad6] hover:rounded-[30px] p-3 block  rounded-md text-base font-medium'
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
        {/* {isOpen && (
          <div className='flex justify-end text-white'>
            <div className='flex flex-row'>
              <a
                href='#'
                className='hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium'
              >
                Domov
              </a>
              <a
                href='#'
                className='hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                O nás
              </a>
              <a
                href='#'
                className='hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Služby
              </a>
            </div>
          </div>
        )} */}
      </nav>
      {/* <nav className='w-full text-white nav-font'>
        <div className='justify-between px-4 mx-auto lg:max-w-[90%] md:items-center md:flex md:px-8'>
          <div>
          
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className='justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                <li>
                  <a href='/blog' className='text-[2rem] hover:text-green'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='/surveys' className='text-[2rem] hover:text-green'>
                    Surveys
                  </a>
                </li>

                <li>
                  <Link
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className='text-[2rem] hover:text-green'
                  >
                    Contact
                  </Link>
                </li>
                {isAuth && (
                  <li className='relative inline-block text-left bg-transparent text-white '>
                    <button
                      className='inline-flex text-[2rem] justify-center items-center w-full hover:text-green outline-none'
                      onClick={toggleDropdown}
                    >
                      Admin
                      <svg
                        className='-mr-1 ml-2 h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className='absolute right-0 mt-2 w-56 rounded-md'>
                        <div
                          className='py-1 text-[1.5rem] flex flex-col items-end'
                          role='menu'
                          aria-orientation='vertical'
                          aria-labelledby='options-menu'
                        >
                          <button
                            className='hover:text-green'
                            onClick={() => signUserOut()}
                          >
                            Log out
                          </button>
                          <a
                            href={'/create-blog'}
                            className='ml-2 hover:text-green'
                          >
                            Create Blog
                          </a>
                        </div>
                      </div>
                    )}
                  </li>
                )}
               
              </ul>
            </div>
          </div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            <div className=''>
              <button
                className='p-2 text-white-700 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-10 h-10'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-10 h-10'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  )
}

export default Navbar
