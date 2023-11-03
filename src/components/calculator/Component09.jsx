import React from 'react'

const Component09 = ({ onBack, onNext, handleHasGarage }) => {
  return (
    <>
      <p className='text-[#0076ba] text-center text-[25px] pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-center font-bold pt-4 pb-8'>
        Je v cene bytu aj miesto pre automobil?
      </h1>
      <div className='flex flex-row justify-center gap-10'>
        <div
          id='garage'
          onClick={() => handleHasGarage('garage')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[80%] mt-[22%] ml-[12%]'
              src='/garage1.webp'
              alt='garage'
            />

            <p className='font-bold text-[35px] text-right mt-6 mr-3  '>
              garáž
            </p>
          </div>
        </div>
        <div
          id='parking'
          onClick={() => handleHasGarage('parking')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px]'
        >
          <div>
            <img
              className='w-[37%] mt-[22%] ml-[34%]'
              src='/garage2.webp'
              alt='parking'
            />

            <p className='text-[35px] font-bold text-right mr-3 mt-2'>státie</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center mt-4'>
        <div
          id='noParking'
          onClick={() => handleHasGarage('noParking')}
          className='border-2 border-[#0076ba] px-8 py-6 rounded-[15px] mt-8'
        >
          <p className='text-center text-[#0076ba] text-[45px] font-bold'>
            Bez vlastného parkovania
          </p>
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

export default Component09
