import React from 'react'

const Component11 = ({ onBack, onNext, handleBuildingCondition }) => {
  return (
    <>
      <p className='text-[#0076ba] text-center text-[25px] pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-center font-bold pt-4 pb-8'>
        Aký je stav bytového domu?
      </h1>
      <div className='flex flex-row justify-center gap-10'>
        <div
          id='isolated'
          onClick={() => handleBuildingCondition('isolated')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[60%] mt-[10%] ml-[15%]'
              src='/bcond1.webp'
              alt='isolation'
            />

            <p className='font-bold text-[35px] text-right mt-8 mr-3  '>
              zateplený
            </p>
          </div>
        </div>
        <div
          id='newElevator'
          onClick={() => handleBuildingCondition('newElevator')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px]'
        >
          <div>
            <img
              className='w-[53%] mt-[10%] ml-[15%]'
              src='/bcond2.webp'
              alt='newElevator'
            />

            <p className='text-[35px] font-bold text-right mr-3 mt-6'>
              nový výťah
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-10 mt-4'>
        <div
          id='newWindows'
          onClick={() => handleBuildingCondition('newWindows')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[50%] mt-[15%] ml-[12%]'
              src='/bcond3.webp'
              alt='newWindows'
            />

            <p className='font-bold text-[35px] text-right mt-12 mr-3  '>
              nové okná
            </p>
          </div>
        </div>
        <div
          id='newInstallations'
          onClick={() => handleBuildingCondition('newInstallations')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px]'
        >
          <div>
            <img
              className='w-[55%] mt-[10%] ml-[15%]'
              src='/bcond4.webp'
              alt='newInstallations'
            />

            <p className='text-[35px] font-bold text-right mr-3 mt-10'>
              nové stupačky
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

export default Component11
