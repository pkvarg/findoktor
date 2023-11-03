import React from 'react'

const Component07 = ({ onBack, onNext, handleHasElevator }) => {
  return (
    <>
      <p className='text-[#0076ba] text-center text-[25px] pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-center font-bold pt-4 pb-8'>
        Nachádza sa v bytovom dome výťah?{' '}
      </h1>
      <div className='flex flex-row justify-center gap-10'>
        <div
          id='elevatorTrue'
          onClick={() => handleHasElevator('elevatorTrue')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[50%] mt-[10%] ml-[25%]'
              src='/elevator1.webp'
              alt='elevator'
            />

            <p className='font-bold text-[35px] text-right mt-8 mr-3  '>áno</p>
          </div>
        </div>
        <div
          id='elevatorFalse'
          onClick={() => handleHasElevator('elevatorFalse')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px]'
        >
          <div>
            <img
              className='w-[60%] mt-[10%] ml-[19%]'
              src='/elevator2.webp'
              alt='stairs'
            />

            <p className='text-[35px] font-bold text-right mr-3 mt-6'>nie</p>
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

export default Component07
