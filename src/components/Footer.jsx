import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#ffffff] absolute bottom-2 left-1/2 -translate-x-[50%] w-[100%]'>
      <div className='text-[#007ad6] mt-8 lg:mt-8 text-[10px] lg:text-[15px] flex flex-row justify-center items-center gap-8 md:gap-[35%] lg:gap-[20%]'>
        <a className='text-center' href='https://pictusweb.sk' target='_blank'>
          &#60;&#47;&#62; PICTUSWEB Development
        </a>
        <p> &copy; {Date().substring(11, 15)} Všetky práva vyhradené</p>
      </div>
      {/* <a href='mailto:admin@prud.sk'>
      <p>admin@prud.sk</p>
      </a>
      
      <a href='tel:+421904060262'>
      <p>+421 904 060 262</p>
      </a> */}
    </div>
  )
}

export default Footer
