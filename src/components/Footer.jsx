import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#ffffff] w-[100%] lg:w-[55%] 2xl:w-[40%] fixed bottom-4'>
      <div className='text-[#007ad6] mt-8 lg:mt-8 text-[10px] lg:text-[20px] flex flex-row lg:flex-row justify-center lg:justify-between items-center gap-8'>
        <a className='text-center' href='https://pictusweb.sk' target='_blank'>
          &#60;&#47;&#62; PICTUSWEB Development
        </a>
        <p> &copy; {Date().substring(11, 15)} Všetky práva vyhradené</p>
      </div>
    </div>
  )
}

export default Footer
