import React from 'react'
import { toast } from 'react-hot-toast'

const Component08 = ({
  onBack,
  onNext,
  hasBalcony,
  hasLoggia,
  hasTerrace,
  hasBasement,
  setHasBalcony,
  setHasLoggia,
  setHasTerrace,
  setHasBasement,
}) => {
  const onNextGuard = () => {
    if (
      hasBalcony === false &&
      hasLoggia === false &&
      hasTerrace === false &&
      hasBasement === false
    ) {
      toast.success('Zvolili ste bez súčastí')
      setTimeout(onNext, 3000)
    } else onNext()
  }
  return (
    <div className='flex flex-col relative w mx-4 lg:mx-[30%] -mt-[19%] lg:-mt-[10%]'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[12.5px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[18px] lg:text-[20px] text-center font-bold py-2 lg:py-2 leading-[20px] lg:leading-[27px]'>
        Čo ďalšie je súčasťou bytu?{' '}
      </h1>
      <div className='flex flex-row justify-center gap-4 lg:gap-6 mt-4'>
        <div
          id='balcony'
          onClick={() => setHasBalcony((prev) => !prev)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] w-[125px] h-[120px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[60%] mt-[5%] ml-[20%]'
              src='/balcony1.webp'
              alt='balcony1'
            />

            <p className='font-bold text-[20px] absolute bottom-0 right-3'>
              balkón
            </p>
          </div>
        </div>
        <div
          id='loggia'
          onClick={() => setHasLoggia((prev) => !prev)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] w-[125px] h-[120px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[58%] mt-[7%] ml-[24%]'
              src='/balcony2.webp'
              alt='balcony2'
            />

            <p className='font-bold text-[20px] absolute bottom-0 right-3'>
              loggia
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-4 lg:gap-6 mt-4'>
        <div
          id='terrace'
          onClick={() => setHasTerrace((prev) => !prev)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] w-[125px] h-[120px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[62%] lg:w-[57%] mt-[7%] ml-[18%] lg:ml-[22%]'
              src='/balcony3.webp'
              alt='balcony3'
            />

            <p className='font-bold text-[20px] absolute bottom-0 right-3'>
              Terasa
            </p>
          </div>
        </div>
        <div
          id='basement'
          onClick={() => setHasBasement((prev) => !prev)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] w-[125px] h-[120px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[62%] lg:w-[55%] mt-[8%] ml-[20%] lg:ml-[24%]'
              src='/balcony4.webp'
              alt='balcony3'
            />

            <p className='font-bold text-[20px] absolute bottom-0 right-3'>
              pivnica
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-[10%] md:gap-[6%] lg:gap-[11%] mt-[10%] lg:mt-[20%]'>
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

export default Component08
