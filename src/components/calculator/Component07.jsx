import React from 'react'

const Component07 = ({ onBack, onNext, handleHasElevator }) => {
  return (
    <div className='flex flex-col mx-1 lg:mx-[29%] 2xl:mx-[35%]'>
      <p className='text-[#0076ba] text-center text-[18px] lg:text-[25px] pt-8 lg:pt-16'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[25px] lg:text-[25px] text-center font-bold py-4 lg:py-8 leading-[35px]'>
        Nachádza sa v bytovom dome výťah?{' '}
      </h1>
      <div className='flex flex-row justify-center gap-2 lg:gap-10 mt-4'>
        <div
          id='elevatorTrue'
          onClick={() => handleHasElevator('elevatorTrue')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[220px] lg:h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[50%] mt-[30%] lg:mt-[10%] ml-[25%]'
              src='/elevator1.webp'
              alt='elevator'
            />

            <p className='font-bold text-[35px] text-right mt-0 lg:mt-8 mr-3'>
              áno
            </p>
          </div>
        </div>
        <div
          id='elevatorFalse'
          onClick={() => handleHasElevator('elevatorFalse')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[220px] lg:h-[285px]'
        >
          <div>
            <img
              className='w-[60%] mt-[30%] lg:mt-[10%] ml-[19%]'
              src='/elevator2.webp'
              alt='stairs'
            />

            <p className='text-[35px] font-bold text-right mr-3 -mt-1 lg:mt-6'>
              nie
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between pt-[57%] lg:pt-16'>
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

export default Component07
