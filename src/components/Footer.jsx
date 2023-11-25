import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <div className='bg-[#ffffff] absolute bottom-0 md:bottom-2 left-1/2 -translate-x-[50%] w-[100%]'>
      <div
        className={
          path === '/'
            ? 'text-[#007ad6] mt-8 lg:mt-8 text-[10px] lg:text-[15px] flex flex-row justify-center items-center gap-[15%] md:gap-[35%] lg:gap-[22.5%]'
            : 'text-[#007ad6] mt-8 lg:mt-8 text-[10px] lg:text-[15px] flex flex-row justify-between items-center mx-[5.75%] pb-2'
        }
      >
        <a className='text-center' href='https://pictusweb.sk' target='_blank'>
          &#60;&#47;&#62; PICTUSWEB Development
        </a>
        <p> &copy; {Date().substring(11, 15)} Všetky práva vyhradené</p>
      </div>
    </div>
  )
}

export default Footer
