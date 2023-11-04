import React from 'react'

const CalcNavbar = () => {
  return (
    <div className='px-8 flex flex-row justify-between items-center'>
      <div className='flex flex-row items-center gap-2 lg:gap-4 '>
        <div className='flex flex-col gap-[4px] lg:gap-[5px]'>
          <div className='h-[8px] lg:h-[10px] bg-[#0076ba]  w-[40px] lg:w-[50px]'></div>
          <div className='h-[8px] lg:h-[10px] bg-[#0076ba] w-[40px] lg:w-[50px]'></div>
          <div className='h-[8px] lg:h-[10px] bg-[#0076ba] w-[40px] lg:w-[50px]'></div>
        </div>

        <p className='text-[25px] lg:text-[35px] leading-[25px] lg:leading-[35px] font-bold'>
          MICHAL <br /> DOVALA
        </p>
      </div>
      <div className='flex flex-col mt-[4%] lg:mt-[2%]'>
        <img
          className='w-[50%] lg:w-[40%] ml-[30%]'
          src='/maklerLogo.webp'
          alt='logo'
        />
        <p className='text-[20px] lg:text-[25px] leading-[20px] lg:leading-[35px] font-bold mt-2 lg:mt-0'>
          MODERNÝ
        </p>
        <p className='text-[18px] lg:text-[20px] ml-[15%] lg:ml-[20%]'>
          MAKLÉR
        </p>
      </div>
    </div>
  )
}

export default CalcNavbar
