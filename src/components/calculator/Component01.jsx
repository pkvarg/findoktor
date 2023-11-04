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
    <div className='flex flex-col mx-[2%] lg:mx-[25%] 2xl:mx-[30%]'>
      <p className='text-[#0076ba] text-center text-[18px] lg:text-[25px] pt-8 lg:pt-16'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[25px] lg:text-[25px] text-center font-bold py-4 lg:py-8 leading-[35px]'>
        Kde sa nachádza Vaša nehnuteľnosť?
      </h1>
      <div className='border border-[#0076ba] rounded-xl mt-4 h-[80px] lg:h-[90px] flex flex-col'>
        <label htmlFor='text' className='text-[#0076ba] text-[18px] relative'>
          <span className='absolute -top-[0px] left-[10px] '>Mesto</span>
        </label>
        <input
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='mt-[30px] w-[97%] text-right outline-none'
        />
      </div>
      <div className='border border-[#0076ba] rounded-xl mt-4 h-[80px] lg:h-[90px] flex flex-col'>
        <label htmlFor='text' className='text-[#0076ba] text-[18px] relative'>
          <span className='absolute -top-[0px] left-[10px] '>Ulica</span>
        </label>
        <input
          type='text'
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className='mt-[30px] w-[97%] text-right outline-none'
        />
      </div>
      <div className='border border-[#0076ba] rounded-xl h-[80px] lg:h-[90px] flex flex-col mt-4'>
        <label htmlFor='text' className='text-[#0076ba] text-[18px] relative'>
          <span className='absolute -top-[0px] left-[10px] '>Číslo</span>
        </label>
        <input
          type='text'
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
          className='mt-[30px] w-[97%] text-right outline-none'
        />
      </div>

      <div className='flex flex-row justify-between pt-[40%] lg:pt-16'>
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
