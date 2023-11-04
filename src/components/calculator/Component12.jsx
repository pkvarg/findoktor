import React from 'react'

const Component12 = ({ onBack, onNext, handleSmartHomeItems }) => {
  return (
    <div className='flex flex-col mx-1 lg:mx-[30%] 2xl:mx-[34%]'>
      <p className='text-[#0076ba] text-center text-[18px] lg:text-[25px] pt-8 lg:pt-16'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[25px] lg:text-[25px] text-center font-bold py-4 lg:py-8 leading-[35px]'>
        Má byt prvky inteligentnej domácnosti?
      </h1>
      <div className='flex flex-row justify-center gap-2 lg:gap-10 mt-4'>
        <div
          id='termostat'
          onClick={() => handleSmartHomeItems('termostat')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[180px] lg:w-[280px] h-[200px] lg:h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[70%] mt-[10%] ml-[19%]'
              src='/smart1.webp'
              alt='termostat'
            />

            <p className='font-bold text-[26px] lg:text-[35px] text-right mt-4 lg:mt-4 mr-3 leading-[26px] lg:leading-[40px]'>
              smart termostat
            </p>
          </div>
        </div>
        <div
          id='internet'
          onClick={() => handleSmartHomeItems('internet')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[180px] lg:w-[280px] h-[200px] lg:h-[285px]'
        >
          <div>
            <img
              className='w-[53%] mt-[10%] ml-[25%]'
              src='/smart2.webp'
              alt='internet'
            />

            <p className='text-[26px] lg:text-[35px] font-bold text-right mr-3 mt-4 lg:mt-4 leading-[26px] lg:leading-[40px]'>
              internetové pripojenie
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-2 lg:gap-10 mt-4'>
        <div
          id='security'
          onClick={() => handleSmartHomeItems('security')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[180px] lg:w-[280px] h-[200px] lg:h-[285px]'
        >
          <div>
            <img
              className='w-[40%] mt-[10.5%] ml-[12%]'
              src='/smart3.webp'
              alt='security'
            />

            <p className='font-bold text-[24px] lg:text-[35px] text-right mt-6 lg:mt-6 mr-3 leading-[26px] lg:leading-[40px]'>
              bezpečnostný systém
            </p>
          </div>
        </div>
        <div
          id='aircon'
          onClick={() => handleSmartHomeItems('aircon')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[180px] lg:w-[280px] h-[200px] lg:h-[285px]'
        >
          <div>
            <img
              className='w-[50%] mt-[10%] ml-[15%]'
              src='/smart4.webp'
              alt='aircon'
            />

            <p className='text-[24px] lg:text-[35px] font-bold text-right mr-3 mt-2 lg:mt-8 leading-[26px] lg:leading-[30px]'>
              klimatizácia/ stropné chladenie
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between pt-14 lg:pt-16'>
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

export default Component12
