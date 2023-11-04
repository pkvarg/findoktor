import React from 'react'

const Component13 = ({ onBack, onNext, monthlyCosts, setMonthlyCosts }) => {
  return (
    <div className='flex flex-col mx-1'>
      <p className='text-[#0076ba] text-center text-[25px] py-16 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-center font-bold py-8'>
        Aké sú celkové mesačné náklady na byt?
      </h1>
      <div className='flex flex-row justify-center gap-10'>
        <div className='border-2 border-[#0076ba] px-2 my-16 rounded-[35px] w-[98%] lg:w-[50%] h-[125px] flex flex-col gap-[90px] relative'>
          <label htmlFor='text' className='text-[#0076ba] text-[22px] ml-4'>
            <span>Mesačné náklady</span>
          </label>
          <input
            type='text'
            value={monthlyCosts}
            onChange={(e) => setMonthlyCosts(e.target.value)}
            className='text-[68px] font-bold absolute top-[29%] text-right w-[55%] lg:w-[75%] h-[50%] outline-none'
          />
          <p className='text-[#0076ba] font-bold text-[35px] absolute top-[41%] right-8'>
            €/mes.
          </p>
        </div>
      </div>

      <div className='flex flex-row justify-center gap-[8%] lg:gap-[25%] 2xl:gap-[31%] py-16'>
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

export default Component13
