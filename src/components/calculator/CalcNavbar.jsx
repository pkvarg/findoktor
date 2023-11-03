import React from 'react'

const CalcNavbar = () => {
  return (
    <div className='px-8 flex flex-row justify-between items-center'>
      <div className='flex flex-row items-center gap-4 '>
        <div className='flex flex-col gap-[5px]'>
          <div className='h-[10px] bg-[#0076ba] w-[50px]'></div>
          <div className='h-[10px] bg-[#0076ba] w-[50px]'></div>
          <div className='h-[10px] bg-[#0076ba] w-[50px]'></div>
        </div>

        <p className='text-[35px] leading-[35px] font-bold'>
          MICHAL <br /> DOVALA
        </p>
      </div>
      <div className='flex flex-col mt-[2%]'>
        <img className='w-[40%] ml-[30%]' src='/maklerLogo.webp' alt='logo' />
        <p className='text-[25px] leading-[35px] font-bold'>MODERNÝ</p>
        <p className='text-[20px] ml-[20%]'>MAKLÉR</p>
      </div>
    </div>
  )
}

export default CalcNavbar
