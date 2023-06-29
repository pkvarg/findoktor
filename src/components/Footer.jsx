import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#013bb0] py-8'>
      {window.location.pathname !== '/blog' && (
        <div className='bg-[#ffffff] h-[1px] mx-[6%]'></div>
      )}
      <div className='text-[#007ad6] mt-4 lg:mt-8 text-[20px] lg:ml-[7.5%] flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:gap-4'>
        <p> &copy; {Date().substring(11, 15)} Všetky práva vyhradené</p>
        <a className='text-center' href='https://pictusweb.sk' target='_blank'>
          &#60;&#47;&#62; PICTUSWEB Development
        </a>
      </div>
    </div>
  )
}

export default Footer
