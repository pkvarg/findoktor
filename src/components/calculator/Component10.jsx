import React from 'react'

const Component10 = ({ onBack, onNext, builtYear, setBuiltYear }) => {
  return (
    <>
      <p className='text-[#0076ba] text-center text-[18px] lg:text-[25px] pt-8 lg:pt-16'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[25px] lg:text-[25px] text-center font-bold py-4 lg:py-8 leading-[35px]'>
        Kedy bol byt postavený?
      </h1>
      <div className='flex flex-row justify-center gap-10'>
        <div className='border-2 border-[#0076ba] px-2 my-16 rounded-[25px] lg:rounded-[35px] w-[98%] lg:w-[50%] h-[110px] lg:h-[125px] flex flex-col gap-[90px] relative'>
          <label htmlFor='text' className='text-[#0076ba] text-[22px] ml-4'>
            <span>Rok</span>
          </label>
          <input
            type='text'
            value={builtYear}
            onChange={(e) => setBuiltYear(e.target.value)}
            className='text-[68px] font-bold absolute top-[29%] text-right w-[93%] h-[50%] outline-none'
          />
        </div>
      </div>

      <div className='flex flex-row justify-center gap-[8%] lg:gap-[25%] 2xl:gap-[31%] pt-[67%] lg:pt-16'>
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

export default Component10
