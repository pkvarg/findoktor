import React from 'react'

const CalcNavbar = () => {
  return (
    <div className='flex flex-row justify-center items-center mt-2 gap-[40%] md:gap-[52.5%] lg:gap-[40%]'>
      <div className='flex flex-row items-center gap-2 lg:gap-2'>
        <div className='flex flex-col gap-[4px] lg:gap-[4px]'>
          <div className='h-[5px] lg:h-[5px] bg-[#0076ba]  w-[30px] lg:w-[25px]'></div>
          <div className='h-[5px] lg:h-[5px] bg-[#0076ba] w-[30px] lg:w-[25px]'></div>
          <div className='h-[5px] lg:h-[5px] bg-[#0076ba] w-[30px] lg:w-[25px]'></div>
        </div>

        <p
          onClick={() => window.location.reload()}
          className='text-[15px] lg:text-[15px] leading-[14px] lg:leading-[14px] font-extrabold -mt-[2%] hover:cursor-pointer'
        >
          MICHAL <br /> DOVALA
        </p>
      </div>
      <div className='flex flex-col'>
        <img
          className='w-[30%] lg:w-[30%] ml-[30%]'
          src='/maklerLogo.webp'
          alt='logo'
        />
        <p className='text-[12.5px] lg:text-[12.5px] leading-[12.5px] lg:leading-[12.5px] font-black mt-1 lg:mt-1'>
          MODERNÝ <br />{' '}
        </p>
        <p className='text-[12.5px] lg:text-[12.50px] ml-[15%] lg:ml-[20%] -mt-0.5 lg:-mt-0.5'>
          MAKLÉR
        </p>
      </div>
    </div>
  )
}

export default CalcNavbar
