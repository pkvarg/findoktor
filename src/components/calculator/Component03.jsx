import React from 'react'
import { toast } from 'react-hot-toast'

const Component03 = ({
  onBack,
  onNext,
  handleHouseCondition,
  currentConditionClicked,
}) => {
  const onNextGuard = () => {
    console.log(currentConditionClicked)
    if (currentConditionClicked === null) {
      toast.error('Zvoľte stav nehnuteľnosti')
    } else {
      onNext()
    }
  }
  return (
    <div className='flex flex-col'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[12.5px] -mt-[15%] lg:-mt-[10%]'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[18px] lg:text-[20px] text-center font-bold py-2 lg:py-2 leading-[17.5px]'>
        V akom stave je nehnuteľnosť?
      </h1>
      <div className='flex flex-row justify-center gap-4 lg:gap-4 mt-4'>
        <div
          id='1'
          onClick={() => handleHouseCondition(1)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[145px] lg:w-[165px] h-[140px] lg:h-[160px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[100%] mt-[10%] lg:mt-[10%]'
              src='/cnd01.webp'
              alt='home01'
            />
            <div className='bg-[#000000] h-[2px]'></div>
            <p className='font-bold text-[15px] lg:text-[17.5px] absolute top-[62.5%] right-4'>
              Novostavba
            </p>
            <p className='text-right mr-2 text-[#0076ba]  text-[10px] lg:text-[12.5px] leading-[12.5px] absolute top-[77.5%] right-2'>
              Byt bol postavený iba <br /> nedávno
            </p>
          </div>
        </div>
        <div
          id='2'
          onClick={() => handleHouseCondition(2)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[145px] lg:w-[165px] h-[140px] lg:h-[160px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[70%] mt-[10%] lg:mt-[8.5%] ml-[5%]'
              src='/cnd02.webp'
              alt='home02'
            />
            <div className='bg-[#000000] h-[3px]'></div>
            <p className='font-bold text-[15px] lg:text-[17.5px] absolute top-[62.5%] right-4'>
              Vynikajúci
            </p>
            <p className='text-right mr-2 text-[#0076ba]  text-[10px] lg:text-[12.5px] leading-[12.5px] absolute top-[77.5%] right-2'>
              Byt je kompletne zrekonštruovaný
            </p>
          </div>
        </div>
      </div>
      <div className='mt-4 flex flex-row justify-center gap-4 lg:gap-4'>
        <div
          id='3'
          onClick={() => handleHouseCondition(3)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[145px] lg:w-[165px] h-[140px] lg:h-[160px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[100%] mt-[10%] lg:mt-[8.5%]'
              src='/cnd03.webp'
              alt='home03'
            />
            <div className='bg-[#000000] h-[3px]'></div>
            <p className='font-bold text-[15px] lg:text-[17.5px] absolute top-[62.5%] right-4'>
              Dobrý
            </p>
            <p className='text-right mr-2 text-[#0076ba]  text-[10px] lg:text-[12.5px] leading-[12.5px] absolute top-[77.5%] right-2'>
              Niečo už potrebuje modernizovať
            </p>
          </div>
        </div>
        <div
          id='4'
          onClick={() => handleHouseCondition(4)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[145px] lg:w-[165px] h-[140px] lg:h-[160px] flex flex-col relative'
        >
          <div>
            <img
              className='w-[75%] mt-[6%] lg:mt-[7%] ml-[7%]'
              src='/cnd04.webp'
              alt='home04'
            />
            <div className='bg-[#000000] h-[3px] mt-2'></div>
            <p className='font-bold text-[15px] lg:text-[17.5px] absolute top-[62.5%] right-4'>
              Pôvodný
            </p>
            <p className='text-right mr-2 text-[#0076ba]  text-[10px] lg:text-[12.5px] leading-[12.5px] absolute top-[77.5%] right-2'>
              Byt potrebuje celkovú rekonštrukciu
            </p>
            {/* <p className='mt-0 mr-2 text-[#0076ba] text-[18px] text-right'>
              rekonštrukciu
            </p> */}
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-[17%] md:gap-[9%] lg:gap-[8%] xl:gap-[6%] pt-8'>
        <button
          onClick={onBack}
          className='border-2 border-[#0076ba] text-[15px] lg:text-[15px] h-10 lg:h-10 px-8 lg:px-9 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
        >
          Späť
        </button>
        <button
          onClick={() => onNextGuard()}
          className='border-2 border-[#0076ba] text-[15px] lg:text-[15px] h-10 lg:h-10 px-8 lg:px-8 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
        >
          Ďalej
        </button>
      </div>
    </div>
  )
}

export default Component03
