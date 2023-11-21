import React, { useEffect, useRef } from 'react'
import { toast } from 'react-hot-toast'

const Component04 = ({ onBack, onNext, squareMeters, setSquareMeters }) => {
  const inputRef = useRef(null)

  const onNextGuard = () => {
    if (squareMeters <= 0 || squareMeters > 999)
      toast.error('Zadajte veľkosť obytnej plochy')
    else {
      onNext()
    }
  }

  useEffect(() => {
    // Focus the input field when the component mounts
    inputRef.current.focus()
  }, [])

  return (
    <div className='flex flex-col relative w mx-4 lg:mx-[40%] -mt-[15%] lg:-mt-[10%]'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[12.5px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[18px] lg:text-[27.5px] text-center font-bold py-2 lg:py-2 leading-[27.5px]'>
        Akú obytnú plochu má byt?
      </h1>
      <div className='flex flex-row justify-center mt-4'>
        <div className='border border-[#0076ba] rounded-lg lg:rounded-xl mt-4 h-[50px] lg:h-[55px] w-[100%] flex flex-col relative'>
          <label
            htmlFor='text'
            className='text-[#0076ba] text-[12.5px] lg:text-[15px] relative'
          >
            <span className='absolute -top-[0px] left-[10px]'>
              Úžitková plocha
            </span>
          </label>
          <input
            type='number'
            value={squareMeters === 0 ? '' : squareMeters}
            onChange={(e) => setSquareMeters(e.target.value)}
            className='text-[22.5px] lg:text-[25px] absolute top-[24%] lg:top-[24%] right-10 w-[27%] font-bold text-right outline-none'
            ref={inputRef}
          />

          <p className='text-[#0076ba] font-bold text-[17.5px] absolute top-[37%] lg:top-[41%] right-5'>
            m<span className='text-[12.5px] absolute top-0'>2</span>
          </p>
        </div>
      </div>
      <div className='flex flex-row justify-between mt-[20%]'>
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

export default Component04
