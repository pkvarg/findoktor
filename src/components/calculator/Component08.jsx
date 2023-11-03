import React from 'react'

const Compnent08 = ({ onBack, onNext, handleHasBalcony }) => {
  return (
    <>
      <p className='text-[#0076ba] text-center text-[25px] pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-center font-bold pt-4 pb-8'>
        Čo ďalšie je súčasťou bytu?{' '}
      </h1>
      <div className='flex flex-row justify-center gap-10'>
        <div
          id='balcony'
          onClick={() => handleHasBalcony('balcony')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[70%] mt-[10%] ml-[15%]'
              src='/balcony1.webp'
              alt='balcony1'
            />

            <p className='font-bold text-[35px] text-right mt-1 mr-3  '>
              balkón
            </p>
          </div>
        </div>
        <div
          id='loggia'
          onClick={() => handleHasBalcony('loggia')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px]'
        >
          <div>
            <img
              className='w-[67%] mt-[12%] ml-[19%]'
              src='/balcony2.webp'
              alt='balcony2'
            />

            <p className='text-[35px] font-bold text-right mr-3 mt-1'>loggia</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-10 mt-4'>
        <div
          id='terasa'
          onClick={() => handleHasBalcony('terasa')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[72.5%] mt-[10%] ml-[12%]'
              src='/balcony3.webp'
              alt='balcony3'
            />

            <p className='font-bold text-[35px] text-right mt-0 mr-3  '>
              terasa
            </p>
          </div>
        </div>
        <div
          id='pivnica'
          onClick={() => handleHasBalcony('pivnica')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px]'
        >
          <div>
            <img
              className='w-[70%] mt-[10%] ml-[15%]'
              src='/balcony4.webp'
              alt='balcony3'
            />

            <p className='text-[35px] font-bold text-right mr-3 mt-2'>
              pivnica
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-[17%] 2xl:gap-[13%] py-16'>
        <button
          onClick={onBack}
          className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
        >
          Späť
        </button>
        <button
          onClick={onNext}
          className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
        >
          Ďalej
        </button>
      </div>
    </>
  )
}

export default Compnent08
