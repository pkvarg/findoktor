import React from 'react'

const Component00 = ({ handleFlatOrHouse }) => {
  return (
    <div className='flex flex-col justify-center mx-4 lg:mx-0 mt-[20%] lg:mt-0'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[25px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[18px] lg:text-[25px] text-center font-bold py-2 lg:py-4 leading-[35px]'>
        <span className='text-red-600'>Zvoľte</span> typ Vašej nehnuteľnosti
      </h1>
      <div className='flex flex-row justify-center gap-6 lg:gap-10 pt-4'>
        <div
          id='flat'
          onClick={() => handleFlatOrHouse('flat')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] lg:rounded-[35px] w-[120px] lg:w-[180px] h-[160px] lg:h-[220px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[60%] mt-[20%] ml-[23%]'
              src='/flat1.webp'
              alt='flat'
            />
            <p className='text-[#0076ba] font-extrabold text-[20px] lg:text-[25px] text-center mt-4'>
              Byt
            </p>
          </div>
        </div>
        <div
          id='house'
          onClick={() => handleFlatOrHouse('house')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] lg:rounded-[35px] w-[120px] lg:w-[180px] h-[160px] lg:h-[220px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[60%] mt-[20%] ml-[22.5%]'
              src='/flat2.webp'
              alt='house'
            />
            <p className='text-[#0076ba] font-extrabold text-[20px] lg:text-[25px] text-center mt-4'>
              Dom
            </p>
          </div>
        </div>
      </div>
      {/* <div className='flex flex-row justify-start items-center gap-4 mt-[4%] lg:mt-[6%] 2xl:mt-[4%]'>
        <img
          className='ml-[10%] lg:ml-[37%] w-[14%] lg:w-[4%]'
          src='/serv1.webp'
          alt='service'
        />
        <p className='text-[25px] lg:text-[35px]'>Online</p>
      </div>
      <div className='flex flex-row justify-start items-center gap-4'>
        <img
          className='ml-[10%] lg:ml-[37%] w-[12%] lg:w-[4%]'
          src='/serv2.webp'
          alt='service'
        />
        <p className='text-[25px] lg:text-[35px]'>Rýchlo</p>
      </div>
      <div className='flex flex-row justify-start items-center gap-4'>
        <img
          className='ml-[10%] lg:ml-[37%] w-[12%] lg:w-[4%]'
          src='/serv3.webp'
          alt='service'
        />
        <p className='text-[25px] lg:text-[35px]'>Zadarmo</p>
      </div> */}
      <div className='flex justify-center'>
        <div className='border-2 border-[#0076ba] rounded-[20px] lg:rounded-[25px] mt-12 lg:mt-12 w-[100%] hover:border-red-600 hover:border-4'>
          <p className='text-[20px] lg:text-[27.5px] text-[#0076ba] font-extrabold text-center leading-[20px] lg:leading-[29.5px] py-2'>
            {/* Dohodnite si fyzickú <br /> obhliadku hneď */}
            <a href='tel:+421944517560'>
              Dohodnite si fyzickú <br /> obhliadku hneď
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Component00
