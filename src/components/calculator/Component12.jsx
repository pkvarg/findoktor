import React from 'react'

const Component12 = ({ onBack, onNext, handleSmartHomeItems }) => {
  return (
    <>
      <p className='text-[#0076ba] text-center text-[25px] pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-center font-bold pt-4 pb-8'>
        Má byt prvky inteligentnej domácnosti?
      </h1>
      <div className='flex flex-row justify-center gap-10'>
        <div
          id='termostat'
          onClick={() => handleSmartHomeItems('termostat')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[70%] mt-[10%] ml-[19%]'
              src='/smart1.webp'
              alt='termostat'
            />

            <p className='font-bold text-[35px] text-right mt-4 mr-3 leading-[40px]'>
              smart termostat
            </p>
          </div>
        </div>
        <div
          id='internet'
          onClick={() => handleSmartHomeItems('internet')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px]'
        >
          <div>
            <img
              className='w-[53%] mt-[10%] ml-[25%]'
              src='/smart2.webp'
              alt='internet'
            />

            <p className='text-[35px] font-bold text-right mr-3 mt-4 leading-[40px]'>
              internetové pripojenie
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-10 mt-4'>
        <div
          id='security'
          onClick={() => handleSmartHomeItems('security')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[40%] mt-[10.5%] ml-[12%]'
              src='/smart3.webp'
              alt='security'
            />

            <p className='font-bold text-[35px] text-right mt-6 mr-3  leading-[40px]'>
              bezpečnostný systém
            </p>
          </div>
        </div>
        <div
          id='aircon'
          onClick={() => handleSmartHomeItems('aircon')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px]'
        >
          <div>
            <img
              className='w-[50%] mt-[10%] ml-[15%]'
              src='/smart4.webp'
              alt='aircon'
            />

            <p className='text-[30px] font-bold text-right mr-3 mt-5 leading-[30px]'>
              klimatizácia/ stropné chladenie
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-[17%] lg:gap-[20%] 2xl:gap-[13%] py-16'>
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

export default Component12
