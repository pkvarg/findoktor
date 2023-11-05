import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#ffffff] w-[100%] lg:w-[55%] 2xl:w-[40%] fixed bottom-4  lg:mt-0'>
      <div className='text-[#007ad6] mt-8 lg:mt-8 text-[10px] lg:text-[15px] flex flex-row lg:flex-row justify-center lg:justify-between items-center gap-8'>
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
