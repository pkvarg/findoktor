import React from 'react'

const Component00 = ({ handleFlatOrHouse }) => {
  return (
    <div className='flex flex-col justify-center mx-4 lg:mx-0'>
      <p className='text-[#0076ba] text-center text-[25px] pt-[30%] lg:pt-16'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-center font-bold py-16 lg:py-8 leading-[35px]'>
        Zistite hneď teraz hodnotu Vašej nehnuteľnosti
      </h1>
      <div className='flex flex-row justify-center gap-2 lg:gap-10 pt-4'>
        <div
          id='flat'
          onClick={() => handleFlatOrHouse('flat')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[230px] h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[60%] mt-[30%] ml-[23%]'
              src='/flat1.webp'
              alt='flat'
            />
            <p className='font-bold text-[#0076ba] text-[35px] text-center mt-4'>
              Byt
            </p>
          </div>
        </div>
        <div
          id='house'
          onClick={() => handleFlatOrHouse('house')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[230px] h-[285px]'
        >
          <div>
            <img
              className='w-[60%] mt-[30%] ml-[22.5%]'
              src='/flat2.webp'
              alt='house'
            />
            <p className='text-[35px] text-[#0076ba] font-bold text-center mt-4'>
              Dom
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-start items-center gap-4 mt-[16%] lg:mt-[6%] 2xl:mt-[4%]'>
        <img
          className='ml-[10%] lg:ml-[37%] w-[16%] lg:w-[4%]'
          src='/serv1.webp'
          alt='service'
        />
        <p className='text-[35px]'>Online</p>
      </div>
      <div className='flex flex-row justify-start items-center gap-4 mt-2'>
        <img
          className='ml-[10%] lg:ml-[37%] w-[16%] lg:w-[4%]'
          src='/serv2.webp'
          alt='service'
        />
        <p>Rýchlo</p>
      </div>
      <div className='flex flex-row justify-start items-center gap-4 mt-2'>
        <img
          className='ml-[10%] lg:ml-[37%] w-[16%] lg:w-[4%]'
          src='/serv3.webp'
          alt='service'
        />
        <p>Zadarmo</p>
      </div>
      <div className='flex justify-center'>
        <div className='border-2 border-[#0076ba] px-[16%] lg:px-[5%] pb-16 rounded-[25px] h-[110px] mt-[25%] lg:mt-[5%]'>
          <p className='text-[30px] lg:text-[35px] text-[#0076ba] font-bold text-center h-[50%] leading-[30px] lg:leading-[40px] mt-1.5 lg:mt-3'>
            Dohodnite si fyzickú <br /> obhliadku hneď
          </p>
        </div>
      </div>
    </div>
  )
}

export default Component00
