import React from 'react'
import { toast } from 'react-hot-toast'

const Component05 = ({ onBack, onNext, allFloorsCount, setAllFloorsCount }) => {
  const onNextGuard = () => {
    if (allFloorsCount < 0 || allFloorsCount > 99)
      toast.error('Zadajte počet poschodí')
    else {
      onNext()
    }
  }
  return (
    <div className='flex flex-col relative w-[98%] lg:w-[100%] mx-1 lg:mx-0 mt-[20%] lg:mt-0'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[12.5px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[18px] lg:text-[20px] text-center font-bold py-2 lg:py-2 leading-[17.5px] lg:leading-[22px]'>
        Koľko poschodí má budova <br /> v ktorej sa nachádza byt?
      </h1>
      <div className='flex flex-row justify-center mt-0'>
        <div className='border border-[#0076ba] rounded-lg lg:rounded-xl mt-4 h-[50px] lg:h-[55px] w-[100%] flex flex-col relative'>
          <label
            htmlFor='text'
            className='text-[#0076ba] text-[12.5px] lg:text-[15px] ml-2 relative z-10'
          >
            <span>Počet poschodí v budove</span>
          </label>
          <input
            type='number'
            value={allFloorsCount}
            onChange={(e) => setAllFloorsCount(e.target.value)}
            className='text-[22.5px] lg:text-[25px] absolute top-[24%] lg:top-[24%] w-[50%] right-3  text-right font-bold outline-none z-0'
          />
        </div>
      </div>
      <div className='flex flex-row justify-between pt-[70%] lg:pt-[70%] gap-1'>
        <button
          onClick={onBack}
          className='border border-[#0076ba] text-[15px] lg:text-[15px] h-10 lg:h-10 px-8 lg:px-8 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
        >
          Späť
        </button>
        <button
          onClick={() => onNextGuard()}
          className='border border-[#0076ba] text-[15px] lg:text-[15px] h-10 lg:h-10 px-7 lg:px-7 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
        >
          Ďalej
        </button>
      </div>
    </div>
  )
}

export default Component05
