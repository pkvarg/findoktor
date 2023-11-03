import React from 'react'

const Component00 = ({ handleFlatOrHouse }) => {
  return (
    <>
      <p className='text-[#0076ba] text-center text-[25px] pt-16'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-center font-bold pt-4 pb-8'>
        Zistite hneď teraz hodnotu Vašej nehnuteľnosti
      </h1>
      <div className='flex flex-row justify-center gap-10'>
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
      <img
        className='ml-[37%] w-[14%] mt-[7%]'
        src='/compZeroIcons.webp'
        alt='icons'
      />
      <div className='border-2 border-[#0076ba] px-2 mb-16 rounded-[35px] w-[27%] h-[100px] ml-[37%] mt-[5%]'>
        <p className='text-[35px] text-[#0076ba] font-bold  text-center h-[50%] leading-[40px] mt-2'>
          Dohodnite si fyzickú <br /> obhliadku hneď
        </p>
      </div>
    </>
  )
}

export default Component00
