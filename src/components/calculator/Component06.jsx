import React from 'react'

const Component06 = ({
  onBack,
  onNext,
  currentFloorNumber,
  setCurrentFloorNumber,
}) => {
  return (
    <>
      <p className='text-[#0076ba] text-center text-[25px] pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-center font-bold pt-4 pb-8'>
        Na ktorom poschodí sa nachádza byt?
      </h1>
      <div className='flex flex-row justify-center gap-10'>
        <div className='border-2 border-[#0076ba] px-2 my-16 rounded-[35px] w-[50%] h-[125px] flex flex-col gap-[90px] relative'>
          <label htmlFor='text' className='text-[#0076ba] text-[22px] ml-4'>
            <span>Číslo poschodia bytu</span>
          </label>
          <input
            type='text'
            value={currentFloorNumber}
            onChange={(e) => setCurrentFloorNumber(e.target.value)}
            className='text-[68px] font-bold absolute top-[29%] text-right w-[95%] h-[50%] outline-none'
          />
        </div>
      </div>
      <div className='flex flex-row justify-between mx-[25%] py-16'>
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

export default Component06
