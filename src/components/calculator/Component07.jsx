import React from 'react'

const Component07 = ({ onBack, onNext, handleHasElevator }) => {
  return (
    <div className='flex flex-col relative w-[98%] lg:w-[100%] mx-1 lg:mx-0 mt-[20%] lg:mt-0'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[12.5px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[18px] lg:text-[20px] text-center font-bold py-2 lg:py-2 leading-[20px] lg:leading-[27px]'>
        Nachádza sa v bytovom dome <br /> výťah?{' '}
      </h1>
      <div className='flex flex-row justify-center gap-4 lg:gap-6 mt-4'>
        <div
          id='hasElevator'
          onClick={() => handleHasElevator('hasElevator')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] w-[125px] h-[120px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[50%] mt-[10%] lg:mt-[10%] ml-[25%]'
              src='/elevator1.webp'
              alt='elevator'
            />

            <p className='font-bold text-[20px] absolute bottom-0 right-3'>
              áno
            </p>
          </div>
        </div>
        <div
          id='noElevator'
          onClick={() => handleHasElevator('noElevator')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] w-[125px] h-[120px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[60%] mt-[10%] lg:mt-[10%] ml-[19%]'
              src='/elevator2.webp'
              alt='stairs'
            />

            <p className='font-bold text-[20px] absolute bottom-0 right-3'>
              nie
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between pt-[70%] lg:pt-[70%] gap-1'>
        {' '}
        <button
          onClick={onBack}
          className='border-2 border-[#0076ba] text-[15px] lg:text-[15px] h-10 lg:h-10 px-8 lg:px-8 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
        >
          Späť
        </button>
        <button
          onClick={onNext}
          className='border-2 border-[#0076ba] text-[15px] lg:text-[15px] h-10 lg:h-10 px-7 lg:px-7 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
        >
          Ďalej
        </button>
      </div>
    </div>
  )
}

export default Component07
