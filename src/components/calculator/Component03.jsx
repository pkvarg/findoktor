import React from 'react'

const Component03 = ({ onBack, onNext, handleHouseCondition }) => {
  return (
    <>
      <p className='text-[#0076ba] text-center text-[25px] pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-center font-bold pt-4 pb-8'>
        V akom stave je nehnuteľnosť?
      </h1>
      <div className='flex flex-row justify-center gap-10'>
        <div
          id='1'
          onClick={() => handleHouseCondition(1)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px] flex flex-col gap-[90px]'
        >
          <div>
            <img className='w-[100%] mt-[10%]' src='/cnd01.webp' alt='home01' />
            <div className='bg-[#000000] h-[2px]'></div>
            <p className='font-bold text-[35px] text-right mt-4 mr-3  '>
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
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px]'
        >
          <div>
            <img
              className='w-[70%] mt-[8.5%] ml-[5%]'
              src='/cnd02.webp'
              alt='home02'
            />
            <div className='bg-[#000000] h-[3px]'></div>
            <p className='text-[35px] font-bold text-right mr-3 mt-4'>
              Vynikajúci
            </p>
            <p className='mt-0 mr-2 text-[#0076ba] text-[16px]'>
              Byt je kompletne zrekonštruovaný
            </p>
          </div>
        </div>
      </div>
      <div className='mt-4 flex flex-row justify-center gap-10'>
        <div
          id='3'
          onClick={() => handleHouseCondition(3)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px]'
        >
          <div>
            <img
              className='w-[100%] mt-[8.5%]'
              src='/cnd03.webp'
              alt='home03'
            />
            <div className='bg-[#000000] h-[3px]'></div>
            <p className='text-[35px] font-bold text-right mr-3 mt-4'>Dobrý</p>
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
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px]'
        >
          <div>
            <img
              className='w-[80%] mt-[7%] ml-[7%]'
              src='/cnd04.webp'
              alt='home04'
            />
            <div className='bg-[#000000] h-[3px] mt-2'></div>
            <p className='text-[35px] font-bold text-right mr-3 mt-4'>
              Pôvodný
            </p>
            <p className='mt-0 mr-2 text-[#0076ba] text-[18px] text-right'>
              Byt potrebuje celkovú
            </p>
            <p className='mt-0 mr-2 text-[#0076ba] text-[18px] text-right'>
              rekonštrukciu
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

export default Component03
