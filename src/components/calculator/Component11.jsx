import React from 'react'
import { toast } from 'react-hot-toast'

const Component11 = ({
  onBack,
  onNext,
  hasIsolation,
  hasNewElevator,
  hasNewWindows,
  hasNewInstallations,
  setHasIsolation,
  setHasNewElevator,
  setHasNewWindows,
  setHasNewInstallations,
}) => {
  const onNextGuard = () => {
    if (
      hasIsolation === false &&
      hasNewElevator === false &&
      hasNewWindows === false &&
      hasNewInstallations === false
    ) {
      toast.success('Zvolili ste bez uvedenia stavu')
      setTimeout(onNext, 3000)
    } else onNext()
  }
  return (
    <div className='flex flex-col relative w mx-4 lg:mx-[30%] -mt-[20%] lg:-mt-[10%]'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[12.5px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[18px] lg:text-[20px] text-center font-bold py-2 lg:py-2 leading-[20px] lg:leading-[27px]'>
        Aký je stav bytového domu?
      </h1>
      <div className='flex flex-row justify-center gap-4 lg:gap-4 mt-4'>
        <div
          id='isolation'
          onClick={() => setHasIsolation((prev) => !prev)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] w-[125px] h-[120px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[60%] mt-[5%] ml-[22%] lg:ml-[15%]'
              src='/bcond1.webp'
              alt='isolation'
            />

            <p className='font-bold text-[15px] absolute bottom-2 right-3'>
              zateplený
            </p>
          </div>
        </div>
        <div
          id='newElevator'
          onClick={() => setHasNewElevator((prev) => !prev)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] w-[125px] h-[120px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[45%] lg:w-[53%] mt-[5%] ml-[20%] lg:ml-[15%]'
              src='/bcond2.webp'
              alt='newElevator'
            />

            <p className='font-bold text-[15px] absolute bottom-2 right-3'>
              nový výťah
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-4 lg:gap-4 mt-4'>
        <div
          id='newWindows'
          onClick={() => setHasNewWindows((prev) => !prev)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] w-[125px] h-[120px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[43%] mt-[8%] ml-[12%]'
              src='/bcond3.webp'
              alt='newWindows'
            />

            <p className='font-bold text-[15px] absolute bottom-2 right-3'>
              nové okná
            </p>
          </div>
        </div>
        <div
          id='newInstallations'
          onClick={() => setHasNewInstallations((prev) => !prev)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] w-[125px] h-[120px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[55%] mt-[7%] ml-[15%]'
              src='/bcond4.webp'
              alt='newInstallations'
            />

            <p className='font-bold text-[15px] absolute bottom-2 right-2'>
              nové stupačky
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-[12%]   md:gap-[6%] lg:gap-[8%] pt-4 lg:pt-8'>
        {' '}
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

export default Component11
