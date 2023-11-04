import React from 'react'

const Component11 = ({ onBack, onNext, handleBuildingCondition }) => {
  return (
    <div className='flex flex-col mx-1 lg:mx-[30%] 2xl:mx-[34%]'>
      <p className='text-[#0076ba] text-center text-[25px] pt-16 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-center font-bold py-8'>Aký je stav bytového domu?</h1>
      <div className='flex flex-row justify-center gap-4 lg:gap-10 mt-4'>
        <div
          id='isolated'
          onClick={() => handleBuildingCondition('isolated')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[60%] mt-[20%] lg:mt-[10%] ml-[22%] lg:ml-[15%]'
              src='/bcond1.webp'
              alt='isolation'
            />

            <p className='font-bold text-[35px] text-right mt-12 lg:mt-8 mr-3  '>
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
              className='w-[63%] lg:w-[53%] mt-[14%] lg:mt-[10%] ml-[20%] lg:ml-[15%]'
              src='/bcond2.webp'
              alt='newElevator'
            />

            <p className='text-[35px] font-bold text-right mr-3 mt-10 lg:mt-6 leading-[35px]'>
              nový výťah
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-4 lg:gap-10 mt-4'>
        <div
          id='newWindows'
          onClick={() => handleBuildingCondition('newWindows')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[50%] mt-[20%] lg:mt-[15%] ml-[12%]'
              src='/bcond3.webp'
              alt='newWindows'
            />

            <p className='font-bold text-[35px] text-right mt-16 lg:mt-12 mr-3 leading-[35px]'>
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
              className='w-[55%] mt-[18%] lg:mt-[10%] ml-[15%]'
              src='/bcond4.webp'
              alt='newInstallations'
            />

            <p className='text-[35px] font-bold text-right mr-3 mt-14 lg:mt-2 2xl:mt-10 leading-[35px]'>
              nové stupačky
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

export default Component11
