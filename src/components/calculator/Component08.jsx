import React from 'react'

const Compnent08 = ({ onBack, onNext, handleHasBalcony }) => {
  return (
    <div className='flex flex-col mx-1 lg:mx-[30%] 2xl:mx-[34%]'>
      <p className='text-[#0076ba] text-center text-[18px] lg:text-[25px] pt-8 lg:pt-16'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[25px] lg:text-[25px] text-center font-bold py-4 lg:py-8 leading-[35px]'>
        Čo ďalšie je súčasťou bytu?{' '}
      </h1>
      <div className='flex flex-row justify-center gap-4 lg:gap-10 mt-4'>
        <div
          id='balcony'
          onClick={() => handleHasBalcony('balcony')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[200px] lg:h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[60%] mt-[20%] lg:mt-[14%] ml-[20%]'
              src='/balcony1.webp'
              alt='balcony1'
            />

            <p className='font-bold text-[35px] text-right -mt-1 lg:mt-1 mr-3'>
              balkón
            </p>
          </div>
        </div>
        <div
          id='loggia'
          onClick={() => handleHasBalcony('loggia')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[200px] lg:h-[285px]'
        >
          <div>
            <img
              className='w-[58%] mt-[20%] lg:mt-[15%] ml-[24%]'
              src='/balcony2.webp'
              alt='balcony2'
            />

            <p className='text-[35px] font-bold text-right mr-3 -mt-1 lg:mt-3'>
              loggia
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-4 lg:gap-10 mt-4'>
        <div
          id='terasa'
          onClick={() => handleHasBalcony('terasa')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[200px] lg:h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[62%] lg:w-[57%] mt-[20%] lg:mt-[14%] ml-[18%] lg:ml-[22%]'
              src='/balcony3.webp'
              alt='balcony3'
            />

            <p className='font-bold text-[35px] text-right -mt-1 lg:mt-6 mr-3'>
              terasa
            </p>
          </div>
        </div>
        <div
          id='pivnica'
          onClick={() => handleHasBalcony('pivnica')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[200px] lg:h-[285px] '
        >
          <div>
            <img
              className='w-[62%] lg:w-[55%] mt-[22%] lg:mt-[14%] ml-[20%] lg:ml-[24%]'
              src='/balcony4.webp'
              alt='balcony3'
            />

            <p className='text-[35px] font-bold text-right mr-3 -mt-1 lg:mt-6'>
              pivnica
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between py-16'>
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
    </div>
  )
}

export default Compnent08
