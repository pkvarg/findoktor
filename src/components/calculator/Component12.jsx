import React from 'react'
import { toast } from 'react-hot-toast'

const Component12 = ({
  onBack,
  onNext,
  hasThermostat,
  hasInternet,
  hasAlarm,
  hasAirCon,
  setHasThermostat,
  setHasInternet,
  setHasAlarm,
  setHasAircon,
}) => {
  const onNextGuard = () => {
    if (
      hasThermostat === false &&
      hasInternet === false &&
      hasAlarm === false &&
      hasAirCon === false
    ) {
      toast.success('Zvolili ste bez uvedenia prvkov')
      setTimeout(onNext, 3000)
    } else onNext()
  }
  return (
    <div className='flex flex-col relative w-[98%] lg:w-[100%] mx-1 lg:mx-0 mt-[20%] lg:mt-0'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[12.5px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[18px] lg:text-[20px] text-center font-bold py-2 lg:py-2 leading-[20px] lg:leading-[27px]'>
        Má byt prvky inteligentnej <br /> domácnosti?
      </h1>
      <div className='flex flex-row justify-center gap-4 lg:gap-4 mt-4'>
        {' '}
        <div
          id='thermostat'
          onClick={() => setHasThermostat((prev) => !prev)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] w-[125px] h-[120px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[70%] mt-[10%] ml-[19%]'
              src='/smart1.webp'
              alt='termostat'
            />

            <p className='font-bold text-[12.5px] leading-[12.5px] absolute bottom-2 right-3 text-right'>
              smart <br /> termostat
            </p>
          </div>
        </div>
        <div
          id='internet'
          onClick={() => setHasInternet((prev) => !prev)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] w-[125px] h-[120px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[53%] mt-[10%] ml-[25%]'
              src='/smart2.webp'
              alt='internet'
            />

            <p className='font-bold text-[12.5px] leading-[12.5px] absolute bottom-2 right-3 text-right'>
              internetové <br /> pripojenie
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-4 lg:gap-4 mt-4'>
        <div
          id='alarm'
          onClick={() => setHasAlarm((prev) => !prev)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] w-[125px] h-[120px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[40%] mt-[10.5%] ml-[12%]'
              src='/smart3.webp'
              alt='security'
            />

            <p className='font-bold text-[12.5px] leading-[12.5px] absolute bottom-2 right-3 text-right'>
              bezpečnostný systém
            </p>
          </div>
        </div>
        <div
          id='aircon'
          onClick={() => setHasAircon((prev) => !prev)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] w-[125px] h-[120px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[50%] mt-[10%] ml-[15%]'
              src='/smart4.webp'
              alt='aircon'
            />

            <p className='font-bold text-[12px] leading-[14px] absolute bottom-2 right-2 text-right'>
              klimatizácia/ stropné chladenie
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between pt-[35%] lg:pt-[35%] gap-1'>
        <button
          onClick={onBack}
          className='border-2 border-[#0076ba] text-[15px] lg:text-[15px] h-10 lg:h-10 px-8 lg:px-8 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
        >
          Späť
        </button>
        <button
          onClick={() => onNextGuard()}
          className='border-2 border-[#0076ba] text-[15px] lg:text-[15px] h-10 lg:h-10 px-7 lg:px-7 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
        >
          Ďalej
        </button>
      </div>
    </div>
  )
}

export default Component12
