import React from 'react'

const Component09 = ({
  onBack,
  onNext,
  setHasGarage,
  setHasParking,
  setHasNoParking,
}) => {
  return (
    <div className='flex flex-col relative w-[98%] lg:w-[100%] mx-1 lg:mx-0 mt-[20%] lg:mt-0'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[12.5px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[18px] lg:text-[20px] text-center font-bold py-2 lg:py-2 leading-[20px] lg:leading-[27px]'>
        Je v cene bytu aj miesto pre <br /> automobil?
      </h1>
      <div className='flex flex-row justify-center gap-4 lg:gap-6 mt-4'>
        <div
          id='garage'
          onClick={() => setHasGarage((prev) => !prev)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] w-[125px] h-[120px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[80%] mt-[18%] ml-[10%] lg:ml-[12%]'
              src='/garage1.webp'
              alt='garage'
            />

            <p className='font-bold text-[20px] absolute bottom-0 right-3'>
              garáž
            </p>
          </div>
        </div>
        <div
          id='parking'
          onClick={() => setHasParking((prev) => !prev)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] w-[125px] h-[120px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[40%] lg:w-[37%] mt-[18%] ml-[32%] lg:ml-[34%]'
              src='/garage2.webp'
              alt='parking'
            />

            <p className='font-bold text-[20px] absolute bottom-0 right-3'>
              státie
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div
          className='border-2 border-[#0076ba] rounded-[20px] lg:rounded-[12.5px] mt-6 lg:mt-6 w-[100%] h-[55px]'
          id='noParking'
          onClick={() => setHasNoParking((prev) => !prev)}
        >
          <p className='text-[20px] text-[#0076ba] font-extrabold text-center leading-[20px] pt-[6%]'>
            Bez vlastného parkovania
          </p>
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
          onClick={onNext}
          className='border-2 border-[#0076ba] text-[15px] lg:text-[15px] h-10 lg:h-10 px-7 lg:px-7 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
        >
          Ďalej
        </button>
      </div>
    </div>
  )
}

export default Component09
