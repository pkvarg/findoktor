import React from 'react'

const Component01 = ({
  onNext,
  onBack,
  city,
  setCity,
  street,
  setStreet,
  houseNumber,
  setHouseNumber,
}) => {
  return (
    <div className='flex flex-col relative w-[98%] lg:w-[120%] mx-1 lg:mx-0'>
      <h1 className='text-[18px] lg:text-[25px] text-center font-bold py-2 lg:py-2 leading-[35px]'>
        Kde sa nachádza Vaša nehnuteľnosť?
      </h1>
      <div className='border border-[#0076ba] rounded-lg lg:rounded-xl mt-4 h-[50px] lg:h-[95px] flex flex-col'>
        <label
          htmlFor='text'
          className='text-[#0076ba] text-[15px] lg:text-[18px] relative'
        >
          <span className='absolute -top-[0px] left-[10px]'>Mesto</span>
        </label>
        <input
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='text-[15px] lg:text-[35px] mt-[18px] lg:mt-[30px] w-[97%] font-bold text-right outline-none'
        />
      </div>
      <div className='border border-[#0076ba] rounded-lg lg:rounded-xl mt-4 h-[50px] lg:h-[95px] flex flex-col'>
        <label
          htmlFor='text'
          className='text-[#0076ba] text-[15px] lg:text-[18px] relative'
        >
          <span className='absolute -top-[0px] left-[10px] '>Ulica</span>
        </label>
        <input
          type='text'
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className='text-[15px] lg:text-[35px] mt-[18px] lg:mt-[30px] w-[97%] font-bold text-right outline-none'
        />
      </div>
      <div className='border border-[#0076ba] rounded-lg lg:rounded-xl mt-4 h-[50px] lg:h-[95px] flex flex-col'>
        <label
          htmlFor='text'
          className='text-[#0076ba] text-[15px] lg:text-[18px] relative'
        >
          <span className='absolute -top-[0px] left-[10px] '>Číslo</span>
        </label>
        <input
          type='text'
          value={houseNumber}
          className='text-[15px] lg:text-[35px] mt-[18px] lg:mt-[30px] w-[97%] font-bold text-right outline-none'
        />
      </div>

      <div className='flex flex-row justify-between w-[100%] mt-[16%]'>
        <button
          onClick={onBack}
          className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
        >
          Späť
        </button>
        <button
          className='ml-auto border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
          onClick={onNext}
        >
          Ďalej
        </button>
      </div>
    </div>
  )
}

export default Component01
