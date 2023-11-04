import React from 'react'

const Component09 = ({ onBack, onNext, handleHasGarage }) => {
  return (
    <div className='flex flex-col mx-1 lg:mx-[30%] 2xl:mx-[34%]'>
      <p className='text-[#0076ba] text-center text-[18px] lg:text-[25px] pt-8 lg:pt-16'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[25px] lg:text-[25px] text-center font-bold py-4 lg:py-8 leading-[35px]'>
        Je v cene bytu aj miesto pre automobil?
      </h1>
      <div className='flex flex-row justify-center gap-4 lg:gap-10 mt-4'>
        <div
          id='garage'
          onClick={() => handleHasGarage('garage')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[200px] lg:h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[80%] mt-[24%] lg:mt-[22%] ml-[10%] lg:ml-[12%]'
              src='/garage1.webp'
              alt='garage'
            />

            <p className='font-bold text-[35px] text-right -mt-1 lg:mt-6 mr-3'>
              garáž
            </p>
          </div>
        </div>
        <div
          id='parking'
          onClick={() => handleHasGarage('parking')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[200px] lg:h-[285px]'
        >
          <div>
            <img
              className='w-[40%] lg:w-[37%] mt-[24%] lg:mt-[22%] ml-[32%] lg:ml-[34%]'
              src='/garage2.webp'
              alt='parking'
            />

            <p className='text-[35px] font-bold text-right mr-3 -mt-4 lg:mt-2'>
              státie
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center mt-16 lg:mt-4'>
        <div
          id='noParking'
          onClick={() => handleHasGarage('noParking')}
          className='border-2 border-[#0076ba] px-8 py-6 rounded-[15px]'
        >
          <p className='text-center text-[#0076ba] text-[25px] lg:text-[45px] font-bold leading-[24px]  lg:leading-[45px]'>
            Bez vlastného parkovania
          </p>
        </div>
      </div>
      <div className='flex flex-row justify-between pt-[30%] lg:pt-16'>
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

export default Component09
