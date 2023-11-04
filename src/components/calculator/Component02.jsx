import React from 'react'

const Component02 = ({ onBack, onNext, handleCountRoomClick }) => {
  return (
    <div className='flex flex-col mx-1 lg:mx-[33%] 2xl:mx-[37%]'>
      <p className='text-[#0076ba] text-center text-[25px] pt-16 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-center font-bold py-16 '>Zvoľte počet izieb</h1>
      <div className='flex flex-row justify-center gap-2 lg:gap-10 mt-4'>
        <div
          id='0'
          onClick={() => handleCountRoomClick(0)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[230px] h-[180px] flex flex-col gap-[90px]'
        >
          <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] '></div>
          <p className='font-bold text-right mr-3'>Garzónka</p>
        </div>
        <div
          id='1'
          onClick={() => handleCountRoomClick(1)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[230px] h-[180px]'
        >
          <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
          <p className='text-[#0076ba] text-[75px] font-bold text-right -mt-4 mr-2'>
            1
          </p>
          <p className='font-bold text-right mr-3 -mt-1'>izbový</p>
        </div>
      </div>
      <div className='mt-4 flex flex-row justify-center gap-2 lg:gap-10'>
        <div
          id='2'
          onClick={() => handleCountRoomClick(2)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[230px] h-[180px]'
        >
          <div className='flex flex-col gap-[4px] mt-2'>
            <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[45px] bg-[#0076ba]'></div>
            <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
          </div>
          <p className='text-[#0076ba] text-[75px] font-bold text-right -mt-[26%] mr-2'>
            2
          </p>
          <p className='font-bold text-right mr-3 -mt-3 lg:-mt-1'>izbový</p>
        </div>
        <div
          id='3'
          onClick={() => handleCountRoomClick(3)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[230px] h-[180px]'
        >
          <div className='flex flex-row mt-2'>
            <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
            <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[5px] bg-[#0076ba]'></div>
          </div>

          <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] mt-[5px] ml-[15px] bg-[#0076ba]'></div>

          <p className='text-[#0076ba] text-[75px] font-bold text-right -mt-[26%] mr-2'>
            3
          </p>
          <p className='font-bold text-right mr-3  -mt-3 lg:-mt-1'>izbový</p>
        </div>
      </div>
      <div className='mt-4 flex flex-row justify-center gap-2 lg:gap-10'>
        <div
          id='4'
          onClick={() => handleCountRoomClick(4)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[230px] h-[200px]'
        >
          <div className='flex flex-row mt-2'>
            <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
            <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[5px] bg-[#0076ba]'></div>
          </div>
          <div className='flex flex-row mt-2'>
            <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
            <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[5px] bg-[#0076ba]'></div>
          </div>
          <p className='text-[#0076ba] text-[75px] font-bold text-right -mt-[28%] mr-2'>
            4
          </p>
          <p className='font-bold text-right mr-3  mt-0 lg:mt-3'>izbový</p>
        </div>
        <div
          id='5'
          onClick={() => handleCountRoomClick(5)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[230px] h-[200px]'
        >
          <div className='flex flex-row mt-2'>
            <div className='border-4 border-[#0076ba] h-[22.5px] lg:h-[25px] w-[22.5px] lg:w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
            <div className='border-4 border-[#0076ba] h-[22.5px] lg:h-[25px] w-[22.5px] lg:w-[25px]  rounded-[60px] ml-[5px] bg-[#0076ba]'></div>
          </div>
          <div className='flex flex-row mt-2'>
            <div className='border-4 border-[#0076ba] h-[22.5px] lg:h-[25px] w-[22.5px] lg:w-[25px]  rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
            <div className='border-4 border-[#0076ba] h-[22.5px] lg:h-[25px] w-[22.5px] lg:w-[25px] rounded-[60px] ml-[5px] bg-[#0076ba]'></div>
          </div>
          <div className='flex flex-row mt-2'>
            <div className='border-4 border-[#0076ba] h-[22.5px] lg:h-[25px] w-[22.5px] lg:w-[25px]  rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
            <p className='ml-[7.5px] -mt-[8%] text-[32.5px] lg:text-[35px] text-[#0076ba]'>
              +
            </p>
          </div>

          <p className='text-[#0076ba] text-[62.5px] lg:text-[75px] font-bold text-right -mt-[48.5%] mr-2'>
            5+
          </p>
          <p className='font-bold text-right mr-3 mt-3 '>izbový</p>
        </div>
      </div>
      <div className='flex flex-row justify-between py-16'>
        <button
          onClick={() => onBack()}
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

export default Component02
