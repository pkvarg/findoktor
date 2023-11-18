import React from 'react'
import { toast } from 'react-hot-toast'

const Component13 = ({ onBack, onNext, monthlyCosts, setMonthlyCosts }) => {
  const onNextGuard = () => {
    if (monthlyCosts <= 0 || monthlyCosts > 9999) {
      toast.error('Zadajte mesačné náklady')
    } else {
      onNext()
    }
  }
  return (
    <div className='flex flex-col relative w mx-4 lg:mx-[30%] -mt-[15%] lg:-mt-[10%]'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[12.5px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[18px] lg:text-[20px] text-center font-bold py-2 lg:py-2 leading-[20px] lg:leading-[27px]'>
        Aké sú celkové mesačné <br /> náklady na byt?
      </h1>
      <div className='flex flex-row justify-center mt-0'>
        <div className='border border-[#0076ba] rounded-lg lg:rounded-xl mt-4 h-[50px] lg:h-[55px] w-[100%] flex flex-col relative'>
          <label
            htmlFor='text'
            className='text-[#0076ba] text-[12.5px] lg:text-[15px] ml-2 relative z-10'
          >
            <span>Mesačné náklady</span>
          </label>
          <div className=''>
            <input
              type='number'
              value={monthlyCosts}
              onChange={(e) => setMonthlyCosts(e.target.value)}
              className='text-[22.5px] lg:text-[25px] absolute top-[25%] lg:top-[27.5%] w-[50%] right-16 lg:right-12 lg:mr-1 text-right font-bold outline-none z-0'
            />
            <p className='text-[#0076ba] font-bold text-[12.5px] absolute top-[50%] right-3 z-0'>
              €/mes.
            </p>
          </div>
          {/* Additional elements if needed */}
        </div>
      </div>

      <div className='flex flex-row justify-center gap-[40%] md:gap-[70%] lg:gap-[62%] mt-[20%]'>
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

export default Component13
