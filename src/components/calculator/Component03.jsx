import React from 'react'

const Component03 = ({ onBack, onNext, handleHouseCondition }) => {
  return (
    <div className='flex flex-col mx-1 lg:mx-[29%] 2xl:mx-[35%]'>
      <p className='text-[#0076ba] text-center text-[18px] lg:text-[25px] pt-8 lg:pt-16'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[25px] lg:text-[25px] text-center font-bold py-4 lg:py-8 leading-[35px]'>
        V akom stave je nehnuteľnosť?
      </h1>
      <div className='flex flex-row justify-center gap-4 lg:gap-10 mt-4'>
        <div
          id='1'
          onClick={() => handleHouseCondition(1)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[180px] lg:w-[280px] h-[225px] lg:h-[285px] flex flex-col gap-2 lg:gap-[90px]'
        >
          <div>
            <img
              className='w-[100%] mt-[10%] lg:mt-[10%]'
              src='/cnd01.webp'
              alt='home01'
            />
            <div className='bg-[#000000] h-[2px]'></div>
            <p className='font-bold text-[25px] lg:text-[35px] text-right mt-4 mr-3  '>
              Novostavba
            </p>
            <p className='text-right mr-2 text-[#0076ba] text-[18px]'>
              Byt bol postavený iba nedávno
            </p>
          </div>
        </div>
        <div
          id='2'
          onClick={() => handleHouseCondition(2)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[180px] lg:w-[280px] h-[225px] lg:h-[285px]'
        >
          <div>
            <img
              className='w-[70%] mt-[10%] lg:mt-[8.5%] ml-[5%]'
              src='/cnd02.webp'
              alt='home02'
            />
            <div className='bg-[#000000] h-[3px]'></div>
            <p className='text-[25px] lg:text-[35px] font-bold text-right mr-3 mt-4'>
              Vynikajúci
            </p>
            <p className='mt-0 mr-2 text-[#0076ba] text-[16px]'>
              Byt je kompletne zrekonštruovaný
            </p>
          </div>
        </div>
      </div>
      <div className='mt-4 flex flex-row justify-center gap-4 lg:gap-10'>
        <div
          id='3'
          onClick={() => handleHouseCondition(3)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[180px] lg:w-[280px] h-[225px] lg:h-[285px]'
        >
          <div>
            <img
              className='w-[100%] mt-[10%] lg:mt-[8.5%]'
              src='/cnd03.webp'
              alt='home03'
            />
            <div className='bg-[#000000] h-[3px]'></div>
            <p className='text-[25px] lg:text-[35px] font-bold text-right mr-3 mt-4'>
              Dobrý
            </p>
            <p className='mt-0 mr-2 text-[#0076ba] text-[18px] text-right'>
              Niečo už potrebuje
            </p>
            <p className='mt-0 mr-2 text-[#0076ba] text-[18px] text-right'>
              modernizovať
            </p>
          </div>
        </div>
        <div
          id='4'
          onClick={() => handleHouseCondition(4)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[180px] lg:w-[280px] h-[225px] lg:h-[285px]'
        >
          <div>
            <img
              className='w-[80%] mt-[6%] lg:mt-[7%] ml-[7%]'
              src='/cnd04.webp'
              alt='home04'
            />
            <div className='bg-[#000000] h-[3px] mt-2'></div>
            <p className='text-[25px] lg:text-[35px] font-bold text-right mr-3 mt-4'>
              Pôvodný
            </p>
            <p className='mt-0 mr-2 text-[#0076ba] text-[18px] text-right leading-[18px] lg:leading-[26px]'>
              Byt potrebuje celkovú rekonštrukciu
            </p>
            {/* <p className='mt-0 mr-2 text-[#0076ba] text-[18px] text-right'>
              rekonštrukciu
            </p> */}
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between py-8'>
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

export default Component03
