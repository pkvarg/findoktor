import React from 'react'

const CalcNavbar = () => {
  return (
    <>
      <div className='flex flex-row justify-center items-center gap-[110%] lg:gap-[135%]'>
        <div className='flex flex-row items-center gap-2 lg:gap-4'>
          <div className='flex flex-col gap-[4px] lg:gap-[5px]'>
            <div className='h-[5px] lg:h-[10px] bg-[#0076ba]  w-[30px] lg:w-[50px]'></div>
            <div className='h-[5px] lg:h-[10px] bg-[#0076ba] w-[30px] lg:w-[50px]'></div>
            <div className='h-[5px] lg:h-[10px] bg-[#0076ba] w-[30px] lg:w-[50px]'></div>
          </div>

          <p className='text-[17.5px] lg:text-[35px] leading-[17.5px] lg:leading-[35px] font-extrabold'>
            MICHAL <br /> DOVALA
          </p>
        </div>
        <div className='flex flex-col mt-[8%] lg:mt-[2%]'>
          <img
            className='w-[40%] lg:w-[40%] ml-[30%]'
            src='/maklerLogo.webp'
            alt='logo'
          />
          <p className='text-[12.5px] lg:text-[25px] leading-[12.5px] lg:leading-[35px] font-black mt-1 lg:mt-0'>
            MODERNÝ <br />{' '}
          </p>
          <p className='text-[12.5px] lg:text-[20px] ml-[15%] lg:ml-[20%] -mt-0.5 lg:-mt-2'>
            MAKLÉR
          </p>
        </div>
      </div>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[25px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
    </>
  )
}

export default CalcNavbar
