import React from 'react'

const Component02 = ({ onBack, onNext, handleCountRoomClick }) => {
  return (
    <div className='flex flex-col mt-[20%] lg:mt-0 lg:w-[90%]'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[12.5px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[18px] lg:text-[17.5px] text-center font-bold py-2 lg:py-2 leading-[17.5px]'>
        Zvoľte počet izieb
      </h1>
      <div className='flex flex-row justify-center gap-4 lg:gap-4 pt-2'>
        <div
          id='0'
          onClick={() => handleCountRoomClick(0)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] lg:rounded-[35px] w-[110px] lg:w-[130px] h-[80px] lg:h-[100px] flex flex-col relative'
        >
          <div className='border-2 lg:border-2 border-[#0076ba] h-[15px] lg:h-[17.5px] w-[15px] lg:w-[17.5px] rounded-[30px] ml-[7.5px]'></div>
          <p className='absolute text-[15px] lg:text-[17.5px] font-bold bottom-1 right-4'>
            Garzónka
          </p>
        </div>
        <div
          id='1'
          onClick={() => handleCountRoomClick(1)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] lg:rounded-[35px] w-[110px] lg:w-[130px] h-[80px] lg:h-[100px] flex flex-col relative'
        >
          <div className='border-2 lg:border-2 border-[#0076ba] h-[15px] lg:h-[17.5px] w-[15px] lg:w-[17.5px] rounded-[30px] ml-1 lg:ml-[10px] bg-[#0076ba]'></div>
          <p className='absolute top-2 lg:top-2 right-4 text-[#0076ba] text-[40px] lg:text-[50px] font-bold text-right'>
            1
          </p>
          <p className='absolute text-[15px] lg:text-[17.5px] font-bold bottom-1 lg:bottom-1 right-4'>
            izbový
          </p>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-4 lg:gap-4 mt-2'>
        <div
          id='2'
          onClick={() => handleCountRoomClick(2)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] lg:rounded-[35px] w-[110px] lg:w-[130px] h-[80px] lg:h-[100px] flex flex-col relative'
        >
          <div className='flex flex-col gap-[4px] mt-0'>
            <div className='border-2 lg:border-4 border-[#0076ba] h-[15px] lg:h-[17.5px] w-[15px] lg:w-[17.5px] rounded-[30px] ml-4 lg:ml-[30px] bg-[#0076ba]'></div>
            <div className='border-2 lg:border-4 border-[#0076ba] h-[15px] lg:h-[17.5px] w-[15px] lg:w-[17.5px] rounded-[30px] ml-1 lg:ml-[10px] bg-[#0076ba]'></div>
          </div>
          <p className='absolute -top-0 lg:-top-0 right-4 text-[#0076ba] text-[40px] lg:text-[50px] font-bold text-right'>
            2
          </p>
          <p className='absolute text-[15px] lg:text-[17.5px] font-bold bottom-1 right-4'>
            izbový
          </p>
        </div>
        <div
          id='3'
          onClick={() => handleCountRoomClick(3)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] lg:rounded-[35px] w-[110px] lg:w-[130px] h-[80px] lg:h-[100px] flex flex-col relative'
        >
          <div className='flex flex-row'>
            <div className='border-2 lg:border-4 border-[#0076ba] h-[15px] lg:h-[17.5px] w-[15px] lg:w-[17.5px] rounded-[30px] ml-1 lg:ml-[10px] bg-[#0076ba]'></div>
            <div className='border-2 lg:border-4 border-[#0076ba] h-[15px] lg:h-[17.5px] w-[15px] lg:w-[17.5px] rounded-[30px] ml-1 lg:ml-[5px] bg-[#0076ba]'></div>
          </div>

          <div className='border-2 lg:border-4 border-[#0076ba] h-[15px] lg:h-[17.5px] w-[15px] lg:w-[17.5px] rounded-[30px] ml-1 lg:ml-[10px] mt-1 lg:mt-1  bg-[#0076ba]'></div>

          <p className='absolute -top-0 lg:-top-0 right-4 text-[#0076ba] text-[40px] lg:text-[50px] font-bold text-right'>
            3
          </p>
          <p className='absolute text-[15px] lg:text-[17.5px] font-bold bottom-1 lg:bottom-1 right-4'>
            izbový
          </p>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-4 lg:gap-4 mt-2'>
        <div
          id='4'
          onClick={() => handleCountRoomClick(4)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] lg:rounded-[35px] w-[110px] lg:w-[130px] h-[80px] lg:h-[100px] flex flex-col relative'
        >
          <div className='flex flex-row'>
            <div className='border-2 lg:border-4 border-[#0076ba] h-[15px] lg:h-[17.5px] w-[15px] lg:w-[17.5px] rounded-[30px] ml-1 lg:ml-[10px] bg-[#0076ba]'></div>
            <div className='border-2 lg:border-4 border-[#0076ba] h-[15px] lg:h-[17.5px] w-[15px] lg:w-[17.5px] rounded-[30px] ml-1 lg:ml-[5px] bg-[#0076ba]'></div>
          </div>
          <div className='flex flex-row mt-1'>
            <div className='border-2 lg:border-4 border-[#0076ba] h-[15px] lg:h-[17.5px] w-[15px] lg:w-[17.5px] rounded-[30px] ml-1 lg:ml-[10px] bg-[#0076ba]'></div>
            <div className='border-2 lg:border-4 border-[#0076ba] h-[15px] lg:h-[17.5px] w-[15px] lg:w-[17.5px] rounded-[30px] ml-1 lg:ml-[5px] bg-[#0076ba]'></div>
          </div>
          <p className='absolute -top-0 lg:-top-0 right-4 text-[#0076ba] text-[40px] lg:text-[50px] font-bold text-right'>
            4
          </p>
          <p className='absolute text-[15px] lg:text-[17.5px] font-bold bottom-1 lg:bottom-1 right-4'>
            izbový
          </p>
        </div>
        <div
          id='5'
          onClick={() => handleCountRoomClick(5)}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] lg:rounded-[35px] w-[110px] lg:w-[130px] h-[80px] lg:h-[100px] flex flex-col relative'
        >
          <div className='flex flex-row'>
            <div className='border-2 lg:border-4 border-[#0076ba] h-[15px] lg:h-[17.5px] w-[15px] lg:w-[17.5px] rounded-[30px] ml-1 lg:ml-[10px] bg-[#0076ba]'></div>
            <div className='border-2 lg:border-4 border-[#0076ba] h-[15px] lg:h-[17.5px] w-[15px] lg:w-[17.5px] rounded-[30px] ml-1 lg:ml-[5px] bg-[#0076ba]'></div>
          </div>
          <div className='flex flex-row mt-1'>
            <div className='border-2 lg:border-4 border-[#0076ba] h-[15px] lg:h-[17.5px] w-[15px] lg:w-[17.5px] rounded-[30px] ml-1 lg:ml-[10px] bg-[#0076ba]'></div>
            <div className='border-2 lg:border-4 border-[#0076ba] h-[15px] lg:h-[17.5px] w-[15px] lg:w-[17.5px] rounded-[30px] ml-1 lg:ml-[5px] bg-[#0076ba]'></div>
          </div>

          <div className='flex flex-row mt-1'>
            <div className='border-2 lg:border-4 border-[#0076ba] h-[15px] lg:h-[17.5px] w-[15px] lg:w-[17.5px] rounded-[30px] ml-1 lg:ml-[10px] bg-[#0076ba]'></div>
            <p className='ml-[3px] lg:ml-[6px] -mt-[19%] lg:-mt-4 text-[30px] lg:text-[30px] text-[#0076ba]'>
              +
            </p>
          </div>

          <p className='absolute top-1 lg:-top-0 right-[25%] lg:right-5  text-[#0076ba] text-[40px] lg:text-[50px] font-bold text-right'>
            5{' '}
            <span className='absolute bottom-2 lg:bottom-4 -right-[75%] lg:-right-[55%] text-[30px] lg:text-[30px]'>
              +
            </span>
          </p>
          <p className='absolute text-[13px] lg:text-[17.5px] font-bold bottom-1 lg:bottom-1 right-3'>
            izbový
          </p>
        </div>
      </div>
      <div className='flex flex-row justify-between py-8 lg:py-2 xl:py-4'>
        <button
          onClick={() => onBack()}
          className='border border-[#0076ba] text-[15px] lg:text-[17.5px] h-10 lg:h-10 px-8 lg:px-8 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
        >
          Späť
        </button>
        <button
          onClick={onNext}
          className='border border-[#0076ba] text-[15px] lg:text-[17.5px] h-10 lg:h-10 px-8 lg:px-7 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
        >
          Ďalej
        </button>
      </div>
    </div>
  )
}

export default Component02
